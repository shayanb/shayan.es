# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website/portfolio for Shayan Eskandari, built using Jekyll static site generator. The site is hosted on GitHub Pages at shayan.es.

## Build and Development Commands

This is a Jekyll-based static site. Common commands:

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build the site
bundle exec jekyll build

# Build with production environment
JEKYLL_ENV=production bundle exec jekyll build
```

## Architecture

### Core Structure

1. **Jekyll Configuration** (`_config.yml`): Contains site-wide settings, owner information, and Jekyll processing options.

2. **Layout System**:
   - `_layouts/default.html`: Base layout with sidebar and content area
   - `_layouts/resume.html`: Main resume/portfolio layout used by homepage
   - `_layouts/post.html`: For blog posts
   - `_layouts/page.html`: For static pages

3. **Data-Driven Content** (`_data/index/`):
   - `careers.yml`: Professional experience
   - `education.yml`: Academic background
   - `skills.yml`: Technical skills
   - `projects.yml`: Portfolio projects
   - `publications.yml`: Academic/professional publications
   - `cve.yml`: Security vulnerabilities discovered
   - `audits.yml`: Security audits performed
   - `reviews.yml`: Review activities
   - `nonprofit.yml`: Non-profit involvement
   - `lectures.yml`: Speaking engagements
   - `media.yml`: Media appearances
   - `writings.yml`: Written content
   - `conferences.yml`: Conference participation

4. **Includes** (`_includes/`):
   - `sections/`: Modular components for each resume section (about, career, education, etc.)
   - Navigation, footer, sidebar components
   - Social links integration

5. **Styling**:
   - SCSS files in `_sass/` directory
   - Main entry point: `css/main.scss`
   - Component-based organization

### Key Features

- Responsive design using grid system
- Modular section-based layout
- Data files drive content (easy updates without touching HTML)
- Font Awesome integration for icons
- Country flag icons in `img/flags/`
- Google Analytics integration
- Social media profile links

### URL Structure

- Homepage: `/` (uses resume layout)
- Blog posts: `/articles/YEAR-MONTH/TITLE`
- Static pages use their filename as URL