class tile{
    _WALL = false;
    get WALL() {
        return this._WALL;
    }
    set WALL(value) {
        this._WALL = value;
    }
    _DOT = false;
    get DOT() {
        return this._DOT;
    }
    set DOT(value) {
        this._DOT = value;
    }
    _BIGDOT = false;
    get BIGDOT() {
        return this._BIGDOT;
    }
    set BIGDOT(value) {
        this._BIGDOT = value;
    }
    _EATEN = false;
    get EATEN() {
        return this._EATEN;
    }
    set EATEN(value) {
        this._EATEN = value;
    }
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    show(){
        var canvas=document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFD700"
        if (this.DOT)
        {
            if (!this.EATEN)
            {
                ctx.beginPath();
                ctx.ellipse(this.x, this.y, 2, 2, Math.PI, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
            }
        }
        
        else{
            if (this.BIGDOT) {
                ctx.beginPath();
                ctx.ellipse(this.x, this.y, 4, 4, Math.PI, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
            }
        
        } 
    }
}