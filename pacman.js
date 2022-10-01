class pacman{
    _pos = new vector(20* 16 + 8, 20 * 16+30 + 8);
    get pos() {
        return this._pos;
    }
    set pos(value) {
        this._pos = value;
    }
    _vel = new vector(-1, 0);
    get vel() {
        return this._vel;
    }
    set vel(value) {
        this._vel = value;
    }
    _turnTo = new vector(-1, 0);
    get turnTo() {
        return this._turnTo;
    }
    set turnTo(value) {
        this._turnTo = value;
    }
    _score=0;
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    constructor(){

    }
    show(){
        var canvas=document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        // ctx.font=("40px serif")
        // ctx.fillStyle=("white")
        // ctx.fillText("Score: ", 10,40)
        ctx.fillStyle = "#FFD700"
        ctx.beginPath();
        ctx.ellipse(this.pos.x, this.pos.y, 10, 10, Math.PI, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
    move(){
        this.pos.add(this.vel);
    }
    
    keypress(key){
        if (key == 37) {
            this.turnTo = new vector(-1, 0);
            this.turn = true;
         }
        if (key == 39) {
            this.turnTo = new vector(1, 0);
            this.turn = true;
        }
        if (key == 38) {
            this.turnTo = new vector(0, -1);
            this.turn = true;
        }
        if (key == 40) {
            this.turnTo = new vector(0, 1);
            this.turn = true;
            
        }
    }
  
}