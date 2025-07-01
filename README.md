# Shayan Eskandari - Personal Website

[![Build Status](https://github.com/shayanb/shayan.es/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/shayanb/shayan.es/actions/workflows/pages/pages-build-deployment)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fshayan.es)](https://shayan.es)

Personal portfolio and professional website for Shayan Eskandari - Senior Security Engineer, Blockchain Researcher, and Human-Centered Technologist.

🌐 **Live Site:** [shayan.es](https://shayan.es)

## About

This website showcases my professional journey, research contributions, and creative projects spanning cybersecurity, blockchain technology, and human-centered design. The site features an interactive portfolio, comprehensive CV, security research publications, and artistic expressions. 

## Features

- **📄 Interactive CV/Resume** - Comprehensive professional experience and education
- **🔬 Research Portfolio** - Academic publications, security audits, and technical contributions  
- **🎨 Creative Gallery** - Digital and physical art, including philosophical commentary on technology
- **🎙️ Media & Talks** - Speaking engagements, podcasts, and conference presentations
- **🌙 Dark/Light Mode** - Automatic theme switching with manual override
- **📱 Mobile Responsive** - Optimized experience across all devices
- **🔍 Fast Search** - Quick navigation through content sections
- **🎮 Easter Eggs** - Hidden interactive elements for curious visitors

## Tech Stack

- **Framework:** Jekyll (GitHub Pages compatible)
- **Styling:** SCSS with modern CSS features
- **JavaScript:** Vanilla JS with interactive components
- **Deployment:** GitHub Pages with automated CI/CD
- **Performance:** Optimized assets, lazy loading, and caching


## Architecture

### Core Components

```
├── _data/index/          # Content data files (YAML)
│   ├── careers.yml       # Professional experience
│   ├── education.yml     # Academic background  
│   ├── publications.yml  # Research papers & publications
│   ├── audits.yml       # Security audit portfolio
│   ├── lectures.yml     # Speaking engagements
│   ├── projects.yml     # Technical projects
│   └── art.yml          # Creative works
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _sass/              # Styling architecture
│   ├── components/     # UI components
│   └── pages/         # Page-specific styles
└── js/                # Interactive functionality
```

### Data-Driven Content

The site uses a data-driven approach where content is stored in YAML files under `_data/index/`. This allows for easy content updates without touching HTML/template code:

- **Career Timeline:** Professional experience with rich descriptions and achievements
- **Publication Archive:** Academic papers with abstracts, links, and media coverage
- **Security Portfolio:** Detailed audit reports and CVE discoveries
- **Speaking History:** Conference talks, podcasts, and media appearances
- **Project Showcase:** Technical projects with screenshots and live demos

## Content Highlights

### Security Research
- **50+ Smart Contract Audits** for major DeFi protocols
- **CVE Discoveries** in blockchain infrastructure
- **Academic Publications** in top-tier security conferences
- **Industry Contributions** to Ethereum ecosystem security

### Creative Works
- **"Smokey Skull"** - Mixed media commentary on consumption and mortality
- **"A Technology Named Money"** - Installation exploring monetary paradoxes
- **Digital Art** - Blockchain-inspired creative expressions

### Professional Experience
- **Current:** Co-founder & Security Auditor at Creed
- **Previous:** Head of Security at Puffer Finance, CTO at Ether Capital
- **Academic:** PhD in Information Systems Engineering, Concordia University

## Development

### Local Setup

```bash
# Clone the repository
git clone https://github.com/shayanb/shayan.es.git
cd shayan.es

# Install dependencies
bundle install

# Run development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

### Content Updates

Content is organized in `_data/index/` files. To add new content:

1. Update relevant YAML files in `_data/index/`
2. Add images to appropriate directories in `img/`
3. Commit changes - GitHub Pages will automatically rebuild

### GitHub Pages Compatibility

The site is optimized for GitHub Pages deployment with:
- Jekyll 3.10.0 compatibility
- Legacy Sass function usage (no modern `@use` modules)
- Optimized build times and asset loading

## Contact & Connect

- **Website:** [shayan.es](https://shayan.es)
- **GitHub:** [@shayanb](https://github.com/shayanb)
- **LinkedIn:** [shayane](https://linkedin.com/in/shayane)
- **Google Scholar:** [Profile](https://scholar.google.com/citations?user=K9xYnSQAAAAJ)

## Philosophy

> "The intersection of technology and humanity requires constant vigilance. As we build the future, we must ensure it serves human flourishing rather than diminishing it."

This website embodies a commitment to transparency, security, and the responsible development of technology. Every project, publication, and creative work reflects a dedication to making technology more human-centered and secure.

## License

**Website Code:** MIT License - Feel free to fork and adapt for your own use
**Content & Images:** All Rights Reserved - Personal portfolio content

This version of the website is built on top of the previous version that was developed in 2018 using **[Leonids](http://renyuanz.github.io/leonids)**. 


---

*Built with ❤️ and ☕ by Shayan Eskandari*

*Last updated: July 2025*