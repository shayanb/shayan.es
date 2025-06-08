$(document).ready(function() {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
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

  // Add scroll effect to header
  let lastScroll = 0;
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

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
    console.log('%cNow try the Konami code on the website: ↑ ↑ ↓ ↓ ← → ← → B A', 'color: #1e3a5f; font-style: italic;');
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
    socialToggle.addEventListener('click', () => {
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

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!socialContainer.contains(e.target)) {
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
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
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
    console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'color: #ff6b35; font-size: 24px; font-weight: bold;');
    console.log('%c🎉 You are a true hacker! Enjoy the show! 🎉', 'color: #1e3a5f; font-size: 16px;');
    
    // Show a temporary notification
    const notification = document.createElement('div');
    notification.innerHTML = '🎮 Konami Code Activated! 🎉';
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