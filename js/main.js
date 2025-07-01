$(document).ready(function() {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu-hamburger');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a hamburger link
    document.querySelectorAll('.nav-menu-hamburger .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
  
  // No submenu toggle needed - all items always visible

  // Smooth scroll for anchor links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 500);
    }
  });

  // Add scroll effect to header and jump to top button
  let lastScroll = 0;
  const header = document.querySelector('.site-header');
  const jumpToTopBtn = document.getElementById('jumpToTop');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Show/hide jump to top button
    if (jumpToTopBtn) {
      if (currentScroll > 300) {
        jumpToTopBtn.classList.add('visible');
      } else {
        jumpToTopBtn.classList.remove('visible');
      }
    }
    
    lastScroll = currentScroll;
  });

  // Enhanced Jump to top with section navigation
  if (jumpToTopBtn) {
    const sectionsContainer = document.getElementById('navSections');
    const jumpIcon = document.getElementById('jumpIcon');
    const sectionsIcon = document.getElementById('sectionsIcon');
    let sections = [];
    let sectionsVisible = false;
    
    // Find all sections on the page
    function findSections() {
      const sectionSelectors = [
        'h2[id]', 'h3[id]', 'section[id]'
      ];
      
      sections = [];
      sectionSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
          if (element.id && element.offsetParent !== null) {
            const rect = element.getBoundingClientRect();
            if (rect.height > 0) {
              const title = getElementTitle(element);
              if (title) { // Only add sections with valid titles (excludes page headers)
                // Use getBoundingClientRect + scrollY for more accurate positioning
                const top = rect.top + window.scrollY;
                sections.push({
                  id: element.id,
                  title: title,
                  element: element,
                  top: top
                });
              }
            }
          }
        });
      });
      
      // Remove duplicates and sort by position
      sections = sections.filter((section, index, arr) => 
        arr.findIndex(s => s.id === section.id) === index
      ).sort((a, b) => a.top - b.top);
      
      return sections.length > 2; // Only show if there are more than 2 sections
    }
    
    function getElementTitle(element) {
      // Skip page headers (h1 elements that are direct children of .page-header)
      if (element.closest('.page-header')) {
        return null;
      }
      
      // For section elements, look for the first header inside
      if (element.tagName === 'SECTION') {
        const headerElement = element.querySelector('h1, h2, h3, h4');
        if (headerElement && !headerElement.closest('.page-header')) {
          return headerElement.textContent.trim();
        }
        // Fallback to ID-based title for sections
        return element.id.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      }
      
      // For header elements, return their text directly
      if (element.tagName.match(/^H[1-6]$/)) {
        return element.textContent.trim();
      }
      
      // For other elements with headers inside
      if (element.querySelector('h1, h2, h3, h4')) {
        const headerElement = element.querySelector('h1, h2, h3, h4');
        // Skip if this is a page header
        if (headerElement.closest('.page-header')) {
          return null;
        }
        return headerElement.textContent.trim();
      }
      
      if (element.textContent && element.children.length < 3) {
        return element.textContent.slice(0, 30).trim();
      }
      
      return element.id.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    function createSectionsList() {
      if (sections.length <= 2) return;
      
      sectionsContainer.innerHTML = '';
      sections.forEach(section => {
        const sectionLink = document.createElement('button');
        sectionLink.className = 'nav-section-link';
        sectionLink.innerHTML = `<i class="fa fa-angle-right"></i> ${section.title}`;
        sectionLink.addEventListener('click', () => {
          section.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          hideSections();
        });
        sectionsContainer.appendChild(sectionLink);
      });
    }
    
    function showSections() {
      if (sections.length <= 2) return;
      sectionsVisible = true;
      sectionsContainer.style.display = 'block';
      jumpToTopBtn.classList.add('sections-mode');
      updateButtonIcon();
    }
    
    function hideSections() {
      sectionsVisible = false;
      sectionsContainer.style.display = 'none';
      jumpToTopBtn.classList.remove('sections-mode');
      updateButtonIcon();
    }
    
    jumpToTopBtn.addEventListener('click', () => {
      if (sectionsVisible) {
        hideSections();
      } else if (sections.length > 2 && window.scrollY > 300) {
        showSections();
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
    
    // Update icon based on sections availability and current page
    function updateButtonIcon() {
      if (sections.length > 2) {
        jumpIcon.style.display = 'none';
        sectionsIcon.style.display = 'block';
      } else {
        jumpIcon.style.display = 'block';
        sectionsIcon.style.display = 'none';
      }
    }
    
    // Initialize sections on page load
    setTimeout(() => {
      if (findSections()) {
        createSectionsList();
        updateButtonIcon();
      }
    }, 2000);
    
    // Close sections when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navigation-widget')) {
        hideSections();
      }
    });
  }

  // Console ASCII Art Easter Egg
  console.log(`
%c
███████╗██╗  ██╗ █████╗ ██╗   ██╗ █████╗ ███╗   ██╗
██╔════╝██║  ██║██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║
███████╗███████║███████║ ╚████╔╝ ███████║██╔██╗ ██║
╚════██║██╔══██║██╔══██║  ╚██╔╝  ██╔══██║██║╚██╗██║
███████║██║  ██║██║  ██║   ██║   ██║  ██║██║ ╚████║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝

%cWelcome to my website! 🚀
Feel free to explore the console for more surprises...

`, 'color: #ff6b35; font-weight: bold;', 'color: #1e3a5f; font-size: 14px;');

  // Add more console messages
  console.log('%c> Type secretCommand() for a surprise!', 'color: #10b981; font-family: monospace;');
  
  // Secret command function
  window.secretCommand = function() {
    console.log('%c🎉 You found the secret command! Here\'s a cookie: 🍪', 'color: #ff6b35; font-size: 16px;');
    console.log('%c yeah... I have not really implemented this yet...', 'color:rgb(54, 149, 146); font-size: 16px;');
    console.log('%c but I am really glad you are here and reading this...', 'color:rgb(76, 74, 215); font-size: 16px;');
    console.log('%c How are YOU doing? Are you happy? like in the general sense?', 'color:rgb(94, 10, 8); font-size: 16px;');
    console.log('%c well... hope you are. anyhow hit me up if you made it this far :)', 'color:rgb(94, 10, 8); font-size: 16px;');
    console.log('%c - - - - - - - - -', 'color:rgb(13, 226, 77); font-style: italic;');
    setTimeout(() => {
      console.log('%cNow try the Konami code on the website: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #1e3a5f; font-style: italic;');
    }, 1000);
  };

  // Konami Code Easter Egg
  let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑ ↑ ↓ ↓ ← → ← → B A
  let konamiIndex = 0;

  document.addEventListener('keydown', function(e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        triggerKonamiEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  // Floating Social Icons
  const socialToggle = document.querySelector('.social-float-toggle');
  const socialMenu = document.querySelector('.social-float-menu');
  const socialContainer = document.querySelector('.social-float-container');
  const socialItems = document.querySelectorAll('.social-item');

  if (socialToggle && socialMenu) {
    socialToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = socialMenu.classList.contains('active');
      
      if (isActive) {
        // Close menu
        socialMenu.classList.remove('active');
        socialToggle.classList.remove('active');
        socialContainer.classList.remove('menu-open');
        socialItems.forEach(item => {
          item.classList.remove('animate');
        });
      } else {
        // Open menu
        socialMenu.classList.add('active');
        socialToggle.classList.add('active');
        socialContainer.classList.add('menu-open');
        
        // Animate items with staggered timing
        socialItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate');
          }, index * 50);
        });
      }
    });
    
    // Prevent menu from closing when clicking on menu items
    socialMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (socialMenu.classList.contains('active')) {
        socialMenu.classList.remove('active');
        socialToggle.classList.remove('active');
        socialContainer.classList.remove('menu-open');
        socialItems.forEach(item => {
          item.classList.remove('animate');
        });
      }
    });

    // Close menu when pressing escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && socialMenu.classList.contains('active')) {
        socialMenu.classList.remove('active');
        socialToggle.classList.remove('active');
        socialContainer.classList.remove('menu-open');
        socialItems.forEach(item => {
          item.classList.remove('animate');
        });
      }
    });
  }

  // Dark Mode Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  
  // Theme is already set on documentElement in head.html, sync with body
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  body.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      // Set theme on both documentElement and body
      document.documentElement.setAttribute('data-theme', newTheme);
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Add a subtle animation to the toggle button
      themeToggle.style.transform = 'scale(0.9)';
      setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
      }, 150);
    });
  }

  function triggerKonamiEasterEgg() {
    // Create floating elements animation
    const colors = ['#ff6b35', '#1e3a5f', '#ffc947', '#10b981'];
    const symbols = ['🔐', '💻', '🚀', '⚡', '🎯', '🔥', '💡', '🎨'];
    
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const element = document.createElement('div');
        element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        element.style.cssText = `
          position: fixed;
          top: -50px;
          left: ${Math.random() * 100}vw;
          font-size: ${Math.random() * 30 + 20}px;
          color: ${colors[Math.floor(Math.random() * colors.length)]};
          z-index: 9999;
          pointer-events: none;
          animation: fall 3s linear forwards;
        `;
        
        document.body.appendChild(element);
        
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }, 3000);
      }, i * 100);
    }

    // Add the CSS animation if it doesn't exist
    if (!document.getElementById('konami-animation')) {
      const style = document.createElement('style');
      style.id = 'konami-animation';
      style.textContent = `
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Console message
    console.log('%c 🤗 You are Loved! ❤️', 'color: #ff6b35; font-size: 24px; font-weight: bold;');
    console.log('%c🎉 You are a true hacker! Enjoy the show! 🎉', 'color: #1e3a5f; font-size: 16px;');
    setTimeout(() => {
      console.log('%c and do not forget, Be kind cause we all die!', 'color:rgb(94, 10, 8); font-size: 16px;');
    }, 1000);
    // Show a temporary notification
    const notification = document.createElement('div');
    notification.innerHTML = 'Be kind cause we all die! ❤️';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(45deg, #ff6b35, #1e3a5f);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      font-weight: bold;
      z-index: 10000;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      animation: slideIn 0.5s ease, slideOut 0.5s ease 2.5s forwards;
    `;
    
    // Add notification animation CSS
    if (!document.getElementById('notification-animation')) {
      const notificationStyle = document.createElement('style');
      notificationStyle.id = 'notification-animation';
      notificationStyle.textContent = `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
      `;
      document.head.appendChild(notificationStyle);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }
});