//calling the gID for targeting the canvassheet
const canvas = document.getElementById('canvas-sheet');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight - 5;
canvas.width = window.innerWidth;


let petal = 0;
let scale = 10;


function drawFlower(){
    let angle = petal * 1;
    let radius = scale * Math.sqrt(petal);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;
    let size = 0;
    // for drawing any kind of circle
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.arc(positionX,positionY,12,0,Math.PI*2);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
    petal++;
}

function animate(){ 
    drawFlower();
    if(petal>50) return;
    // better than setInterval, adjusts to screen refresh rate, better practice :)))
    requestAnimationFrame(animate);
}
document.getElementById('canvas-sheet').addEventListener('click',()=>{
    animate();
});

