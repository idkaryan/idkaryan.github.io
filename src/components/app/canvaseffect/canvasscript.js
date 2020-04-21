import Line from './line';
import { getRandomInt } from './util';

const CanvasScript = (canvas)=>{
    let ctx = canvas.getContext('2d');
    // DYNAMIC DIMENSIONS    
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    let canvasRect = canvas.getBoundingClientRect()
    
    window.onmousemove = (mouseEvent)=>{
        m.x = mouseEvent.clientX - canvasRect.left;
        m.y = mouseEvent.clientY - canvasRect.top;
      }
    
    // mouse event object
    const m = {
        x : 0,
        y : 0
    }

    let lines = [];
    
    // SETTINGS
    let colorStyles = ["#FF3F8E", "#04C2C9", "#2E55C1"];
    const bufferVal = 50;
    const numberOfLines = 100;
    const squareSideSize = 2;

    for(let i = 0; i < numberOfLines; i++){
        // let line = new Line(getRandomInt(xStart, xEnd), getRandomInt(yStart, yEnd), getRandomInt(30,120));
        let line = new Line(canvas.width / 2, canvas.height / 2, getRandomInt(30,120))
        line.radius = (getRandomInt(100, canvas.width / 2));
        lines.push(line);
    }
    // const slope = Math.tan(9/5);
    
    let anim = ()=>{
        canvasRect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lines.forEach(line=>{
            line.x = line.ox + line.radius * Math.sin(line.getTime())
            line.y = line.oy + line.radius * Math.cos(line.getTime())
            
            // let c = line.y - (slope * line.x);
            // let distance = (Math.abs((slope * m.x) - m.y + c)) / Math.sqrt(1 + (slope * slope));
            let xDiff = m.x - line.x;
            let yDiff = m.y - line.y;
            
            let predict = ( xDiff / 5 ) * (-9);
            if(predict < yDiff + bufferVal && predict > yDiff - bufferVal){
                line.opacityUp();
            } else {
                line.opacityDown();
            }
            line.draw(ctx);
            // console.log(`mouse ${m.x.toFixed(1)} ${m.y.toFixed(1)} line ${line.x} ${line.y}`);
            
            ctx.fillStyle = colorStyles[line.colorIndex];
            ctx.fillRect(line.x - squareSideSize/2,line.y - squareSideSize/2, squareSideSize, squareSideSize);
        })
        window.requestAnimationFrame(anim);
    }


    window.requestAnimationFrame(anim);
}

export default CanvasScript;