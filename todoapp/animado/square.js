const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let radio = 1;
let sentido =  true;
 const circle = {
    radio: 1,
    sentido: true,
    color: 'rgb(100,20,30)',
    getColor: function () {
        // const r = Math.floor(Math.random() * 255)
        // const g = Math.floor(Math.random() * 255)
        // const b = Math.floor(Math.random() * 255)
        this.color = `hsl(${radio},50%,70%)`
    },
    show: function(){
        ctx.fillStyle = this.color
        ctx.clearRect(0,0, lienzo.width,lienzo.height)
        ctx.beginPath()
        ctx.arc(300,200,radio,0,Math.PI * 2, sentido);
        ctx.fill();
    }

}


setInterval(() =>{
    circle.show()
    circle.getColor() 
radio = sentido ? radio + 1 : radio -1
 sentido = radio > 200? !sentido : sentido
 sentido = radio < 1? !sentido : sentido
},1)