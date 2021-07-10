const up = 'ArrowUp';
const down = 'ArrowDown';
const left = 'ArrowLeft';
const right = 'ArrowRight';
const size = 50;
const canvas = document.getElementById('cnv');
const contexto = canvas.getContext('2d');
let posX = 50;
let posY = 50;
let objColor = '#00f'
let moveUp = moveDown = moveLeft = moveRight = false;

function updateBlock() {
  moveUp ? posY++ : moveDown ? posY-- : moveRight ? posX++ : posX--
}

function keyUpHandler ({ key }) {
  console.log(key);
}

window.addEventListener('keyup', keyUpHandler)

function update()  {

}

function draw() {
  contexto.fillRect(50, 50, 50, 50);
}

function loop() {
  window.requestAnimationFrame(loop, canvas);
  update();
  draw();
}

loop()