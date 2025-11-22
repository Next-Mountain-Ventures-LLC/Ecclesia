// Add animation to gathering cards when button is clicked
document.addEventListener('DOMContentLoaded', () => {
  setupGatheringAnimation();
});

document.addEventListener('astro:page-load', () => {
  setupGatheringAnimation();
});

function setupGatheringAnimation() {
  const joinBtn = document.getElementById('join-gathering-btn');
  const cards = document.querySelectorAll('.gathering-card');
  
  if (joinBtn && cards.length) {
    joinBtn.addEventListener('click', () => {
      // Animate cards
      cards.forEach(card => {
        card.classList.add('animate-shake');
      });
      
      // Change button text
      const originalText = joinBtn.textContent.trim();
      joinBtn.textContent = 'Select a Gathering Above';
      
      // Reset after 3 seconds
      setTimeout(() => {
        cards.forEach(card => {
          card.classList.remove('animate-shake');
        });
        joinBtn.textContent = originalText;
      }, 3000);
    });
  }
}