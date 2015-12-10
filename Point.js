function Point(x, y, r, color, mouse) {
    var self = this;
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    var drag = false;

    this.update = function () {
        if (drag) {
            this.x = mouse.x;
            this.y = mouse.y;
        };
    }

    addEventListener('mousedown', function () {
        var dx = mouse.x - self.x;
        var dy = mouse.y - self.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= self.r) {
            drag = true;
        } else {
            drag = false;
        }
        console.log(dist, drag);
    });

    addEventListener('mouseup', function () {
        drag = false;
    });

    this.draw = function (context) {
        context.beginPath();
        context.lineWidth = 4;
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        context.stroke();
        context.fill();
        context.closePath();
    }
}