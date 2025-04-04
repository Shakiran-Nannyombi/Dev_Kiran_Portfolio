// Initialize AOS
AOS.init({
  duration: 800,
  once: false,
  offset: 100,
  delay: 100,
  easing: 'ease-out',
  mirror: true,
  anchorPlacement: 'top-bottom'
});

// Mobile menu toggle
document.getElementById('menu-icon').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// Theme Manager
const themeManager = {
  init() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.html = document.documentElement;
    
    if (!this.themeToggle) return;
    
    this.setupTheme();
    this.setupThemeToggle();
  },

  setupTheme() {
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.html.classList.add('dark');
    }
  },

  setupThemeToggle() {
    this.themeToggle.addEventListener('click', () => {
      if (this.html.classList.contains('dark')) {
        this.html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        this.html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
};

// Navigation Manager
const navManager = {
  init() {
    this.nav = document.querySelector('nav');
    this.menuIcon = document.getElementById('menu-icon');
    this.mobileMenu = document.getElementById('mobile-menu');
    
    if (!this.nav || !this.menuIcon || !this.mobileMenu) return;
    
    this.setupScrollHandler();
    this.setupMobileMenu();
    this.setupActiveSection();
  },

  setupScrollHandler() {
    let lastScroll = 0;
    let ticking = false;
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll <= 0) {
        this.nav.classList.remove('bg-white/80', 'dark:bg-gray-900/80', 'backdrop-blur-sm');
      } else {
        this.nav.classList.add('bg-white/80', 'dark:bg-gray-900/80', 'backdrop-blur-sm');
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        this.nav.classList.add('-translate-y-full');
      } else {
        this.nav.classList.remove('-translate-y-full');
      }

      lastScroll = currentScroll;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    });
  },

  setupMobileMenu() {
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if (!menuIcon || !mobileMenu) return;

    // Toggle menu function
    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;
      
      // Animate menu icon
      const spans = menuIcon.querySelectorAll('span');
      if (isMenuOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        
        // Show menu
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        
        // Hide menu
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
      }
    };

    // Toggle menu on icon click
    menuIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (isMenuOpen && !mobileMenu.contains(e.target) && !menuIcon.contains(e.target)) {
        toggleMenu();
      }
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (isMenuOpen) {
          toggleMenu();
        }
      });
    });

    // Close menu when scrolling
    window.addEventListener('scroll', () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    });
  },

  setupActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    if (!sections.length || !navLinks.length) return;

    // Highlight home link by default
    const homeLink = document.querySelector('nav a[href="#"]');
    if (homeLink) {
      homeLink.classList.add('text-secondary', 'dark:text-dark-primary');
      homeLink.classList.remove('text-gray-800', 'dark:text-white');
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}` || (href === '#' && id === 'home')) {
              // Active link styling
              link.classList.add('text-secondary', 'dark:text-dark-primary');
              link.classList.remove('text-gray-800', 'dark:text-white');
            } else {
              // Inactive link styling
              link.classList.remove('text-secondary', 'dark:text-dark-primary');
              link.classList.add('text-gray-800', 'dark:text-white');
            }
          });
        }
      });
    }, { 
      threshold: 0.5,
      rootMargin: '-50px 0px -50px 0px'
    });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const headerOffset = 80;
          const elementPosition = targetSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  themeManager.init();
  navManager.init();
}); 

// Smooth page reload
window.addEventListener('beforeunload', (event) => {
  document.body.classList.add('opacity-0', 'transition-opacity', 'duration-500');
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    document.body.classList.remove('opacity-0');
  }
});