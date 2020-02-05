import { getRandomInt } from './util';

class MyTick{
    constructor(sdf){
      this.mFrame = 0;
      this.lastms = 0;
      this.slowDownFactor = sdf;
    }
    increaseFrame(){
      this.mFrame += 1;
      if(this.mFrame === this.slowDownFactor){
        this.mFrame = 0;
      }
    }
    getTotalMilliseconds(){
      let milliSeconds = new Date().getMilliseconds();
      if(this.lastms > milliSeconds){
        this.increaseFrame();
      }
      this.lastms = milliSeconds;
      let actualMS = milliSeconds + this.mFrame * 1000;
      return (actualMS / (this.slowDownFactor * 1000)) * 2 * Math.PI;
    }
}

class Line{
    constructor(x, y, sdf){
      this.x = x;
      this.y = y;
      this.ox = x;
      this.oy = y;
      this.radius = 100;
      this.time = new MyTick(sdf);
      this.colorIndex = getRandomInt(0,4);
    }
    
    draw(ctx, style="#AAA", lineWidth=0.5){
      let fromX = this.x;
      let fromY = this.y;
      let toX = fromX + 500;
      let toY = fromY - 900;
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = style;
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX,toY);
      ctx.closePath();
      ctx.stroke();
    }
    
    getTime(){
      return this.time.getTotalMilliseconds();
    }
}

export default Line;