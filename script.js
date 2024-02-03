let randomColors = false;

function createGrid(x) {
  const container = document.querySelector('.container');
  const items = document.getElementsByClassName('item');
  if (items.length > 0) {
    container.replaceChildren();
  }
  for (let i = 0; i < x * x; i++) {
    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    item.addEventListener('mouseover', (e) => changeColorOnHover(e));
    container.appendChild(item);

    item.style.width = `calc(600px / ${x})`;
    item.style.height = `calc(600px / ${x})`;
  }
}

function setGridsPerRow() {
  const number = prompt('Please enter a number from 1-100.');
  if (number === null) {
    return;
  } else if (number > 100 || number < 1) {
    setGridsPerRow();
  } else {
    createGrid(number);
  }
}

const gridButtonSetting = document.querySelector('.squares-per-row-btn');
gridButtonSetting.addEventListener('click', () => setGridsPerRow());

const resetButton = document.querySelector('.reset-btn');
resetButton.addEventListener('click', () => createGrid(16));

const randomColorsButton = document.querySelector('.random-colors-btn');
randomColorsButton.addEventListener('click', () => {
  randomColors = !randomColors;
  randomColorsButton.textContent = randomColors
    ? 'Single Color'
    : 'Random Colors';
});

function generateRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
}

function changeColorOnHover(e) {
  const rgb = generateRGB();
  e.target.style.background = !randomColors
    ? 'pink'
    : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

createGrid(16);
