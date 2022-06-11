// thanks to Frank's Laboratory
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let particleArray;
// mouse position
let  mouse = {
    x:null,
    y:null,
    radius:(canvas.height/80)*(canvas.width/80)
}

window.addEventListener('mousemove' ,function(event){
    mouse.x = event.x;// e is the event object
    mouse.y = event.y;
});

// partcile class
class Particle{
    constructor(x,y,directionX,directionY,size,color){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // individual particles
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.size ,0 , Math.PI * 2 ,false);
        ctx.fill();
    }

    //check particle's position,mouse position and move the particle and draw the newer particle
    update(){
        // checking if particle is inside canvas or not , if yes it makes the particle move in the opposite direction -->both for x and y axes
        if(this.x>canvas.width || this.x<0){
            this.directionX = -this.directionX;
        }
        if(this.y>canvas.width || this.y<0){
            this.directionY = -this.directionY;
        }

        //check for collision detection = mouse position/ particle position
        //circle collision : detects collision when dist b/w 2 center points are less than their radii added together
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if( distance < mouse.radius+this.size){
            // we have a collision
            if(mouse.x < this.x && this.x<canvas.width - this.size*10){ // mouse is on left
                this.x += 10; // push it right size
            }
            if(mouse.x > this.x && this.x> this.size*10){
                // mouse from right
                this.x -= 10;//push it to the left
            }
            if(mouse.y < this.y && this.y < canvas.height- this.size*10){
               this. y += 10;
            }
            if(mouse.y > this.y && this.y > canvas.height - this.size*10){
                this.y -= 10;
            }
        }
        // move particles that are not colliding with mouse by adding directionX and directionY to their x and y values
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
        //draw particle by invoking the draw for each particles
 }
}

// create the randomised particle array, which also acts as the initialiser
function init(){
    particleArray = [];
    let numofParticles = (canvas.height * canvas.width)/2000;
    for(let i=0;i<numofParticles;i++){
        let size = (Math.random()*5)+1;
        let x = (Math.random()*((innerWidth - size*2)-(size*2)) + size*2);
        let y = (Math.random()*((innerHeight - size*2)-(size*2))+ size*2);
        let directionX = (Math.random()*5) - 2.5;
        let directionY = (Math.random()*5) - 2.5;
        let color = "white";
        // push new particles created by calling the particle class (with constructor ) for creating new objects
        particleArray.push(new Particle(x,y,directionX,directionY,size,color));
    }
}

// real deal - animationloop using the javascript api(requestAnimationFrame())
function animate(){
    requestAnimationFrame(animate);
    // clearing the leaving trail of a new particle created
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0; i<particleArray.length;i++){
        particleArray[i].update();
        //update the position accordingly;
    }
}

// resize for different window size
window.addEventListener('resize', ()=>{
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height/80)*(canvas.width/80));
    init();
});
init();
animate();