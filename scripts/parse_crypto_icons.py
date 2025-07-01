#!/usr/bin/env python3
"""
Script to parse crypto-icons.xml and generate JSON files for each protocol
"""

import json
import base64
import os
import re

def parse_crypto_icons():
    """Parse the crypto-icons.xml file and extract protocol data"""
    
    # Read the XML file
    xml_file = '../img/crypto/crypto-icons.xml'
    if not os.path.exists(xml_file):
        print(f"Error: {xml_file} not found")
        return
    
    # Read the file content directly since it's a simple mxlibrary format
    with open(xml_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract JSON from mxlibrary tags
    start = content.find('[')
    end = content.rfind(']') + 1
    json_content = content[start:end]
    
    # Create output directory
    output_dir = '../js/crypto-data'
    os.makedirs(output_dir, exist_ok=True)
    
    protocols = []
    
    # Parse the JSON array
    library_data = json.loads(json_content)
    
    for item in library_data:
        # Extract data URL and decode base64 SVG
        data_url = item.get('data', '')
        title = item.get('title', 'Unknown')
        
        if data_url.startswith('data:image/svg+xml;base64,'):
            # Extract base64 part
            base64_data = data_url.split(',')[1]
            
            try:
                # Decode SVG
                svg_data = base64.b64decode(base64_data).decode('utf-8')
                
                # Clean up title to get protocol name
                protocol_name = title.split('(')[0].strip()
                symbol = ''
                
                # Extract symbol if present
                if '(' in title and ')' in title:
                    symbol = title.split('(')[1].split(')')[0].strip()
                
                # Create protocol data
                protocol_data = {
                    'name': protocol_name,
                    'symbol': symbol,
                    'title': title,
                    'svg': svg_data,
                    'width': item.get('w', 256),
                    'height': item.get('h', 256)
                }
                
                protocols.append(protocol_data)
                
                # Save individual JSON file
                filename = re.sub(r'[^\w\-_\.]', '_', protocol_name.lower())
                with open(f'{output_dir}/{filename}.json', 'w') as f:
                    json.dump(protocol_data, f, indent=2)
                
                print(f"Created {filename}.json for {protocol_name}")
                
            except Exception as e:
                print(f"Error processing {title}: {e}")
                continue
        
        elif data_url.startswith('data:image/png;base64,'):
            # Handle PNG data
            base64_data = data_url.split(',')[1]
            
            protocol_name = title.split('(')[0].strip()
            symbol = ''
            
            if '(' in title and ')' in title:
                symbol = title.split('(')[1].split(')')[0].strip()
            
            protocol_data = {
                'name': protocol_name,
                'symbol': symbol,
                'title': title,
                'png_data': base64_data,
                'width': item.get('w', 250),
                'height': item.get('h', 250)
            }
            
            protocols.append(protocol_data)
            
            filename = re.sub(r'[^\w\-_\.]', '_', protocol_name.lower())
            with open(f'{output_dir}/{filename}.json', 'w') as f:
                json.dump(protocol_data, f, indent=2)
            
            print(f"Created {filename}.json for {protocol_name}")
    
    # Create master index file
    index_data = {
        'protocols': [
            {
                'name': p['name'],
                'symbol': p['symbol'],
                'title': p['title'],
                'filename': re.sub(r'[^\w\-_\.]', '_', p['name'].lower()) + '.json'
            }
            for p in protocols
        ],
        'total_count': len(protocols)
    }
    
    with open(f'{output_dir}/index.json', 'w') as f:
        json.dump(index_data, f, indent=2)
    
    print(f"\nCreated index.json with {len(protocols)} protocols")
    print(f"All files saved to {output_dir}/")

if __name__ == '__main__':
    parse_crypto_icons()