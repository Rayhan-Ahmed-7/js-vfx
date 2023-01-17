class Effect {
    constructor(canvas,video){
        this.canvas = canvas;
        this.video = video;
        this.ctx = canvas.getContext("2d");
        this.particles = [];
        this.#animate();
    }
    #animate(){
        const {ctx,video,canvas} = this;
        ctx.drawImage(video,0,0,canvas.width,canvas.height);
        let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        let color = {
            r:0,
            g:0,
            b:255
        };
        const locs = getLocationOfTheColour(imageData,color);
        if(locs.length > 0){
            let avarage = locationAvarage(locs);
            this.particles.push(new Particle(avarage));
        }
        this.particles.forEach(p=>{
            p.update(ctx);
        });
        if(this.particles.length > 0 && this.particles[0].life <= 0){
            this.particles.shift();
        }
        requestAnimationFrame(this.#animate.bind(this));
    }
}