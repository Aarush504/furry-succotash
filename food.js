class Foods{
    constructor(x,y,width,height){

        var options ={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,width,height);
        World.add(world, this.body);
        this.image= loadImage(images/Milk.png);
    }
    display(){
        
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height,options);
        
        if(foodstock!=0){
            for(var i=0;i<foodstock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,200,200,50,50);
                x=x+30;
            }
        }

    }
}