class Particle{
    constructor(loc){
        this.x = loc.x;
        this.y = loc.y;
        let angle = Math.random()*Math.PI*2;
        let speed = 3;
        this.volacity = {
            x:Math.sin(angle)*speed,
            y:Math.cos(angle)*speed
        }
        this.life = 2;
        this.hue = 0;
    }
    #move(){
        this.x+=this.volacity.x;
        this.y+=this.volacity.y;
        this.life -= .06;
        this.hue+=25;
    }
    update(ctx,hue){
        this.#move();
        
        ctx.beginPath();
        ctx.fillStyle = `hsla(${this.hue},100%,80%,${this.life})`;
        ctx.arc(this.x,this.y,5,0,Math.PI*2);
        ctx.fill();
    }
}