class path{
    path= new Array();
    distance= 0;
    constructor() { 
        
    }
    addToTail(n,endNode) {
        // if(!this.path.lenght==0){
        //     this.distance= Math.sqrt(this.path[this.path.length-1].x, this.path[this.path.length-1].y, endNode.x, endNode.y)
        // }
        this.path.push(n)

    }
    clear() {
        this.path.clear();
    }
}