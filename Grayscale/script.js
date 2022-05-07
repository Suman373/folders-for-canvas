const canvas = document.getElementById('canvas1');
const contx = canvas.getContext('2d');
canvas.height = 450;
canvas.width = 800;

const image1 = new Image();
image1.src='./greekWoman.jpg';
// for cross origin source error , convert to base64 and set src to that string of the image data
image1.addEventListener("load", ()=>{
    contx.drawImage(image1,0,0);
    const scannedImg = contx.getImageData(0,0,canvas.width,canvas.height);
    console.log(scannedImg);
    const scannedData = scannedImg.data;
    // 4 elements i.e., r g b alpha makes a pixel, we skip 4 elements to get new pixels in each iteration
    for(let i=0;i<scannedData.length;i+=4){
       const total =scannedData[i]+scannedData[i+1]+scannedData[i+2]; // r g b 
        const avgColorValue = total/3;
        scannedData[i]=avgColorValue;
        scannedData[i+1]=avgColorValue;
        scannedData[i+2]=avgColorValue;
    }
    scannedImg.data = scannedData;
    contx.putImageData(scannedImg,0,1);
    
});

