class blinky{
    pos= new vector(13*16 +8, 11*16+8)
    vel= new vector(1,0)
    ghostnode= new Array()
    color= "#EE0000"
    returnHome=false;
    chase=true;
    frightened = false;
    deadForABit = false;
    constructor(){

    }
    show(){
        var canvas=document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        // ctx.font=("40px serif")
        // ctx.fillStyle=("white")
        // ctx.fillText("Score: ", 10,40)
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.ellipse(this.pos.x, this.pos.y, 10, 10, Math.PI, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
    setnodes(pacman) {
        ghostnodes.add(new node((pos.x-8)/16, (pos.y-8)/16));//add the current position as a node
        this.tilesRepresentation.forEach((row,j) => {
            row.forEach((col,i) => {
                if (!tiles[j][i].wall) {
                    if (!tiles[j-1][i].wall || !tiles[j+1][i].wall) { //check up for space
                      if (!tiles[j][i-1].wall || !tiles[j][i+1].wall) {//check left and right for space
                        ghostnodes.add(new node(i, j));//add the nodes
                      }
                    }
                  }
                })
            
        })
        if (returnHome) {//if returning home then the target is just above the ghost room thing
            ghostnodes.add(new node(13, 11));
          } else {
            if (chase) {
              ghostnodes.add(new node((pacman.pos.x-8) / 16, (pacman.pos.y-8)/16));//target pacman
            } else {
              ghostnodes.add(new node(1, 1));//scatter to corner
            }
          }
          
          for (var i = 0; i< ghostnodes.lenght; i++) {//connect all the nodes together
            ghostnodes[i].addEdges(ghostnodes);
          }

      }
}