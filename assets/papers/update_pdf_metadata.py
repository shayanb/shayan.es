#!/usr/bin/env python3
"""
Update PDF metadata for all publications to improve Google Scholar indexing.
Reads from _data/index/publications.yml and updates PDF files with proper metadata.
"""

import os
import yaml
from pathlib import Path
from datetime import datetime

# Try to import PDF library
try:
    from pypdf import PdfReader, PdfWriter
    USE_PYPDF = True
except ImportError:
    try:
        from PyPDF2 import PdfReader, PdfWriter
        USE_PYPDF = True
    except ImportError:
        USE_PYPDF = False
        print("Warning: pypdf/PyPDF2 not installed. Generating exiftool commands instead.")

def clean_html_tags(text):
    """Remove HTML tags from text"""
    import re
    return re.sub(r'<[^>]+>', '', text)

def update_pdf_metadata_pypdf(pdf_path, metadata):
    """Update PDF metadata using pypdf/PyPDF2"""
    try:
        reader = PdfReader(pdf_path)
        writer = PdfWriter()

        # Copy all pages
        for page in reader.pages:
            writer.add_page(page)

        # Update metadata
        writer.add_metadata({
            '/Title': metadata.get('title', ''),
            '/Author': metadata.get('author', 'Shayan Eskandari'),
            '/Subject': metadata.get('subject', ''),
            '/Keywords': metadata.get('keywords', ''),
            '/Creator': 'Shayan Eskandari',
            '/Producer': 'PDF Metadata Updater',
            '/CreationDate': metadata.get('creation_date', ''),
        })

        # Write to temporary file then replace
        temp_path = pdf_path + '.tmp'
        with open(temp_path, 'wb') as output_file:
            writer.write(output_file)

        os.replace(temp_path, pdf_path)
        print(f"✓ Updated: {os.path.basename(pdf_path)}")
        return True
    except Exception as e:
        print(f"✗ Error updating {os.path.basename(pdf_path)}: {e}")
        return False

def generate_exiftool_command(pdf_path, metadata):
    """Generate exiftool command for updating PDF metadata"""
    title = metadata.get('title', '').replace('"', '\\"')
    author = metadata.get('author', 'Shayan Eskandari')
    subject = metadata.get('subject', '').replace('"', '\\"')[:500]  # Limit length
    keywords = metadata.get('keywords', '').replace('"', '\\"')

    cmd = f'exiftool -Title="{title}" -Author="{author}" -Subject="{subject}" -Keywords="{keywords}" -Creator="Shayan Eskandari" -overwrite_original "{pdf_path}"'
    return cmd

def extract_keywords_from_title(title):
    """Extract potential keywords from title"""
    # Common stop words to exclude
    stop_words = {'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were'}

    # Clean and split title
    words = title.lower().replace(':', ' ').replace('-', ' ').split()
    keywords = [w for w in words if w not in stop_words and len(w) > 3]

    # Add common blockchain/security terms if present
    common_terms = ['blockchain', 'bitcoin', 'ethereum', 'smart contract', 'security', 'cryptography', 'oracle', 'audit']
    for term in common_terms:
        if term in title.lower() and term not in keywords:
            keywords.append(term.replace(' ', '-'))

    return ', '.join(keywords[:10])  # Limit to 10 keywords

def main():
    # Paths
    repo_root = Path(__file__).parent.parent.parent
    yaml_path = repo_root / '_data' / 'index' / 'publications.yml'
    papers_dir = repo_root / 'assets' / 'papers'

    print(f"Reading publications from: {yaml_path}")
    print(f"PDF directory: {papers_dir}")
    print("-" * 60)

    # Load publications YAML
    with open(yaml_path, 'r') as f:
        publications = yaml.safe_load(f)

    commands = []
    updated_count = 0

    for pub in publications:
        if 'local_pdf' not in pub:
            continue

        # Get PDF path
        pdf_relative_path = pub['local_pdf'].lstrip('/')
        pdf_path = repo_root / pdf_relative_path

        if not pdf_path.exists():
            print(f"⚠ PDF not found: {pdf_path}")
            continue

        # Prepare metadata
        title = clean_html_tags(pub.get('name', ''))
        subject = clean_html_tags(pub.get('descr', ''))[:500]  # Limit to 500 chars

        # Use keywords from YAML if available, otherwise extract from title
        if pub.get('keywords'):
            keywords = pub.get('keywords')
        else:
            keywords = extract_keywords_from_title(title)
            # Add publication venue to keywords if available
            if pub.get('published'):
                venue = clean_html_tags(pub['published'])
                keywords = f"{keywords}, {venue}"

        # Format creation date (use publication year)
        year = pub.get('year', datetime.now().year)
        creation_date = f"D:{year}0101120000"

        metadata = {
            'title': title,
            'author': 'Shayan Eskandari',
            'subject': subject,
            'keywords': keywords,
            'creation_date': creation_date,
        }

        if USE_PYPDF:
            # Update directly with pypdf
            if update_pdf_metadata_pypdf(pdf_path, metadata):
                updated_count += 1
        else:
            # Generate exiftool command
            cmd = generate_exiftool_command(pdf_path, metadata)
            commands.append(cmd)
            print(f"→ {pub.get('year')} - {title[:60]}...")

    print("-" * 60)

    if USE_PYPDF:
        print(f"\n✓ Successfully updated {updated_count} PDF files")
    else:
        print(f"\nGenerated {len(commands)} exiftool commands.")
        print("\nTo update PDFs, run these commands:\n")

        # Save commands to shell script
        script_path = papers_dir / 'update_metadata.sh'
        with open(script_path, 'w') as f:
            f.write("#!/bin/bash\n")
            f.write("# Auto-generated script to update PDF metadata\n\n")
            for cmd in commands:
                f.write(cmd + "\n")

        os.chmod(script_path, 0o755)
        print(f"Commands saved to: {script_path}")
        print(f"\nRun with: bash {script_path}")
        print("\nNote: Install exiftool first with: brew install exiftool")

if __name__ == '__main__':
    main()
