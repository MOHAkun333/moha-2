// ============================================
// MOHA SITE - JAVASCRIPT
// ============================================

// Wait for the entire page to load before running code
document.addEventListener('DOMContentLoaded', function() {
  
  // -------- COMING SOON BUTTON --------
  const comingSoonBtn = document.querySelector('.coming-soon');
  
  if (comingSoonBtn) {
    comingSoonBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Add a subtle click feedback animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
      
      // Log to console (you can remove this later)
      console.log('Coming Soon button clicked!');
    });
  }
  
  // -------- SMOOTH PAGE FADE-IN --------
  const canvas = document.querySelector('.canvas');
  if (canvas) {
    canvas.style.opacity = '0';
    canvas.style.transition = 'opacity 0.6s ease-in';
    
    // Fade in after a tiny delay
    setTimeout(() => {
      canvas.style.opacity = '1';
    }, 100);
  }
  
  // -------- TRACK SOCIAL LINK CLICKS --------
  // This helps you see which platform people click more
  const xLink = document.querySelector('.icon-x');
  const igLink = document.querySelector('.icon-ig');
  
  if (xLink) {
    xLink.addEventListener('click', function() {
      console.log('User clicked X/Twitter link');
      // Add analytics tracking here later if you want
    });
  }
  
  if (igLink) {
    igLink.addEventListener('click', function() {
      console.log('User clicked Instagram link');
      // Add analytics tracking here later if you want
    });
  }
  
  // -------- IMAGE ERROR HANDLING --------
  // If an image fails to load, log it to console
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      console.error('Failed to load image:', this.src);
    });
  });
  
});