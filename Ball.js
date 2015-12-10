function Ball(x,y,r,color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    
    this.draw = function(context){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.r,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
    }
}