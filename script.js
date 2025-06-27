const flipBtn = document.getElementById('flip-btn');
const copyBtn = document.getElementById('copy-btn');
const colorCode = document.getElementById('color-code');

// Generate random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Flip color on button click
flipBtn.addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});

// Copy color code to clipboard
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(colorCode.textContent)
    .then(() => {
      colorCode.textContent = 'Copied!';
      setTimeout(() => {
        colorCode.textContent = document.body.style.backgroundColor;
      }, 1000);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
});

// Initialize with a random color
window.addEventListener('load', () => {
  const initialColor = getRandomColor();
  document.body.style.backgroundColor = initialColor;
  colorCode.textContent = initialColor;
});
