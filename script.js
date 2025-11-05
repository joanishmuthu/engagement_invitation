// Randomize emoji positions and animation speeds
const emojis = document.querySelectorAll('.emoji');

function randomizeEmojis() {
  emojis.forEach((emoji) => {
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = 5 + Math.random() * 6 + 's';
    emoji.style.fontSize = 1.5 + Math.random() * 2 + 'em';
    emoji.style.animationDelay = Math.random() * 3 + 's';
  });
}

// Re-randomize occasionally for variety
randomizeEmojis();
setInterval(randomizeEmojis, 8000);
