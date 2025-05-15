document.addEventListener('DOMContentLoaded', () => {
  // Get the elements
  const welcomeText = document.querySelector('.slide-in-left');
  const nameText = document.querySelector('.typing-text');
  const headingText = document.querySelector('.slide-in-right');

  // Function to add animation class with delay
  const animateWithDelay = (element, delay) => {
    setTimeout(() => {
      element.style.opacity = '1';
    }, delay);
  };

  // Animate elements in sequence
  animateWithDelay(welcomeText, 500); // Welcome text slides in first
  animateWithDelay(nameText, 1500);   // Name types out second
  animateWithDelay(headingText, 3000); // Heading slides in last

  // Handle typing animation completion
  nameText.addEventListener('animationend', () => {
    nameText.style.borderRight = 'none'; // Remove the cursor after typing
  });
}); 