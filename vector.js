class vector{
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    constructor(x, y){
        this.x = x;
        this.y=y;
    }
    add(vector){
        this.x+=vector.x;
        this.y+=vector.y;
        return this;
    }
}