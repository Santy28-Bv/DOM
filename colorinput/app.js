const inputRed = document.querySelector('#red')
const inputGreen = document.querySelector('#green')
const inputBlue = document.querySelector('#blue')

let redColor= 0;
let greenColor= 0;
let blueColor= 0;

const generateColor=()=>{
return `rgb(${ redColor }), ${ greenColor },${ blueColor })`;

}


inputRed.addEventListener('change', (e)=>{
console.log(e.target.value);
});