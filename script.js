function createGrid(x, y) {
  const container = document.querySelector('.container');
  for (let i = 0; i < x * y; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'item');
    div.addEventListener('mouseover', (e) => changeColorOnHover(e));
    container.appendChild(div);
  }
}

function changeColorOnHover(e) {
  e.target.style.background = 'pink';
}

createGrid(16, 16);
