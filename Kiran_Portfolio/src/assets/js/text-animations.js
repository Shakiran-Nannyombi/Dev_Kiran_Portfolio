// Text animation functions
export const initTextAnimations = () => {
  // Typewriter effect
  const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };
    
    type();
  };

  // Fade in text
  const fadeInText = (element, duration = 1000) => {
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-in-out`;
    
    setTimeout(() => {
      element.style.opacity = '1';
    }, 100);
  };

  // Animate text on scroll
  const animateTextOnScroll = () => {
    const textElements = document.querySelectorAll('.animate-text');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('text-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    textElements.forEach(element => {
      observer.observe(element);
    });
  };

  // Initialize all text animations
  const init = () => {
    // Initialize typewriter effects
    document.querySelectorAll('.typewriter').forEach(element => {
      const text = element.getAttribute('data-text');
      if (text) {
        typeWriter(element, text);
      }
    });

    // Initialize fade in effects
    document.querySelectorAll('.fade-in-text').forEach(element => {
      fadeInText(element);
    });

    // Initialize scroll animations
    animateTextOnScroll();
  };

  // Run initialization
  init();

  // Return public methods
  return {
    typeWriter,
    fadeInText,
    animateTextOnScroll
  };
}; 