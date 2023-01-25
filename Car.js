class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y
        this.width=width;
        this.height=height
        this.speed=0;
        this.accelration=0.2
        this.maxspeed=3;
        this.friction=0.05
   
        this.controls= new Controls();
    }
    update()
{
    if(this.controls.forwards){
        
        this.speed+=this.accelration
    }
    if(this.controls.back){
       
        this.speed-=this.accelration
     
    }
    if (this.speed>this.maxspeed){
        this.speed=this.maxspeed
    }
    if (this.speed<-this.maxspeed/2){
        this.speed=-this.maxspeed /2 
        console.log(this.speed)
    }

    if(this.speed>0){
        this.speed-=this.friction
    }
    if(this.speed<0){
        console.log(this.speed)
        this.speed+=this.friction
    }
    if(this.controls.right && this.controls.forwards | this.controls.back){
        this.x +=0.5
    }
    if(this.controls.left && this.controls.forwards | this.controls.back){
        this.x-=0.5
    }
    this.y-=this.speed
    

}

    draw(context){
        context.beginPath();
        context.rect(
            this.x-this.width/2,
            this.y-this.height/2,
        this.width,
        this.height
        );
        context.fill()
    }
}