function createGrid(x, y) {
  const container = document.querySelector('.container');
  for (let i = 0; i < x * y; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'item');
    container.appendChild(div);
  }
}

createGrid(16, 16);
