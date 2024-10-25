const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 297;
let y = 198;
let width = 6;
let height = 4;
let grow = true;

setInterval(() => {
    ctx.clearRect(0,0, lienzo.width,lienzo.height)
 ctx.fillStyle = `hsl(${height},50%,50%)`
 ctx.fillRect(x,y,width,height)
 if(grow){
    x -= 3;
    width += 6;
    y -= 2;
    height += 4;

 }else {
    x += 3 
    width -= 6
    y += 2
    height += 4
 }

 grow = width > 600? !grow: grow;
 grow = width < 6? !grow: grow;
},30)