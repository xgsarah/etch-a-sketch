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

function changeColorOnHover(e) {
  e.target.style.background = 'pink';
}

createGrid(16);
