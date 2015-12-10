window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    var mouse = utils.captureMouse(canvas);
    var points = [];
    var ball = new Ball(300,200,10,"#ffffff");
    var v = new Vector(0,0)
    var arrived = false;
    var teller = 0;
    var stap = 5;
    
    var numberOfPoints = 8;
    
    for(i = 0; i< numberOfPoints; i++){
        var P = new Point(0,0,10,"#ffff00",mouse);
        P.x = Math.floor(Math.random()*800);
        P.y = Math.floor(Math.random()*450);
        points.push(P);
    }
    
    (function animateCanvas(){
        context.clearRect(0,0,800,450); 
        window.requestAnimationFrame(animateCanvas);
        
        //teken lijn
        context.strokeStyle = "blue";
        context.beginPath();
        //ga naar eerste punt
        context.moveTo(points[0].x,points[0].y);
        //verbind de andere punten
        points.forEach(function(P){
            context.lineTo(P.x,P.y);
            context.stroke();
        }); 
        //sluit het figuur
        context.lineTo(points[0].x,points[0].y);
        context.closePath();
        context.stroke();
        
        //teken points
        points.forEach(function(P){
            P.draw(context);
        });
    })()
});