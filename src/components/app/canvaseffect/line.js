import { getRandomInt } from './util';

class MyTime{
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
    this.opac = 0.2;
    this.rateOfOpacityChange = 0.04;
    this.time = new MyTime(sdf);
    this.colorIndex = getRandomInt(0,4);
  }
  
  draw(ctx, lineWidth=0.5){
    let fromX = this.x;
    let fromY = this.y;
    let toX = fromX + 1000;
    let toY = fromY - 1800;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = `rgba(225,225,255, ${this.opac})`;
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX,toY);
    ctx.closePath();
    ctx.stroke();
  }
  
  getTime(){
    return this.time.getTotalMilliseconds();
  }
  opacityUp(){
    this.opac += this.rateOfOpacityChange;
    if(this.opac > 1.0){
      this.opac = 1.0;
    }
  }
  opacityDown(){
    this.opac -= this.rateOfOpacityChange;
    if(this.opac < 0.2){
      this.opac = 0.2;
    }
  }
}

export default Line;