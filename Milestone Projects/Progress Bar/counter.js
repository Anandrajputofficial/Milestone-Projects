// Get the progress bar element
const progressBar = document.getElementById('progress-bar');

// Calculate the maximum scrollable distance
const maxScroll = document.body.scrollHeight - window.innerHeight;

// Update the progress bar on scroll
window.addEventListener('scroll', () => {
  // Calculate the current scroll distance
  const currentScroll = window.scrollY;
  
  // Calculate the progress as a percentage of the maximum scroll distance
  const progress = (currentScroll / maxScroll) * 100;
  
  // Update the width of the progress bar
  progressBar.style.width = `${progress}%`;
});
