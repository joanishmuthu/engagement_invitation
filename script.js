// Random emoji animation
const emojis = document.querySelectorAll('.emoji');
emojis.forEach((emoji) => {
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = 4 + Math.random() * 4 + 's';
});
