const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 0;
let y = 0;
const square = {
    x: 0,
    y: 0,
    DX: true,
    DY: true,
    color: 'rgb(100,20,30)',
    getColor: function () {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        this.color = `rgb(${r},${g},${b})`
    },
    show: function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, 20, 10 );
    }
}

setInterval(() => {
    square.x = x;
    square.y = y;
    square.getColor();
    square.show();
    x = square.DX ? x + 20 : x - 20;
    y = square.DY ? y + 20 : y - 20;
    square.DX = x > 611 ? !square.DX : square.DX;
    square.DY = y > 411 ? !square.DY : square.DY;

    square.DX = x < 0 ? !square.DX : square.DX;
    square.DY = y < 0 ? !square.DY : square.DY;


}, 1);