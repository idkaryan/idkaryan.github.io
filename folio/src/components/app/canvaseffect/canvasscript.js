import Line from './line';
import { getRandomInt } from './util';

const CanvasScript = (canvas)=>{

    let canvasRect = canvas.getBoundingClientRect()
    
    window.onmousemove = (mouseEvent)=>{
        m.x = mouseEvent.clientX;
        m.y = mouseEvent.clientY;
    }
    
    // mouse event object
    const m = {
        x : 0,
        y : 0
    }

    let ctx = canvas.getContext('2d');

    let lines = [];
    for(let i = 0 ; i < 10 ; i++){
        let line = new LineAnimation(350 + i * 10, 150, 10, 150 + i * 10);
        lines.push(line);
    }

    let anim = ()=>{
        ctx.clearRect(0, 0, 1000, 500);
        lines.forEach(line => {
            let time = new Date();
            let angle = getNextFrame(time, line);
            line.xpos = line.offset + Math.cos(angle) * 170;
            line.ypos = 170 + Math.sin(angle) * 170;
            ctx.fillStyle = "#888";
            if(m.x > canvasRect.left + line.xpos - 10 && m.x < canvasRect.left + line.xpos + 10){
                ctx.fillStyle = "#FFF";
            }
            ctx.fillRect(line.xpos, line.ypos, 1, 400);
        })        
        window.requestAnimationFrame(anim);
    }

    // const anim = (line)=>{
    //     let time = new Date();
    //     let angle = getNextFrame(time, line);
    //     line.xpos = line.xpos + Math.cos(angle) * 170;
    //     line.ypos = line.ypos + Math.sin(angle) * 170;
    //     ctx.fillStyle = "#888";
    //     if(m.x > canvasRect.left + line.xpos - 10 && m.x < canvasRect.left + line.xpos + 10){
    //       ctx.fillStyle = "#FFF";
    //     }
    //     ctx.clearRect(0, 0, 1000, 500);
    //     ctx.fillRect(line.xpos, line.ypos, 1, 400);
        
    //     window.requestAnimationFrame(anim);
    // }

    window.requestAnimationFrame(anim);
}

export default CanvasScript;