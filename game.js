function startGame() {
    myGameArea.start()
}
var myGameArea = {
canvas : document.getElementById("canvas"),
start : function() {
    this.canvas.width = 1280
    this.canvas.height = 480+30
    this.context = this.canvas.getContext("2d")
    this.frameNo = 0
    this.interval = setInterval(updateGameArea, 10)

    window.addEventListener('keydown', function (e) {
        myGameArea.key = e.keyCode
    })
    window.addEventListener('keyup', function (e) {
        myGameArea.key = false
    })
    },
clear:function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
},
}
pacman= new pacman()
map=new map()
blinky= new blinky()
function score(){
ctx = myGameArea.context;
ctx.font=("30px VT323")
ctx.fillStyle=("White")
ctx.fillText("Score: "+pacman.score, 10,25)
}
function updateGameArea() {
pacman.keypress(myGameArea.key)
myGameArea.clear()
map.drawMap()
score()
tiles=map.tiles
pacman.show()
if (checkPosition())
    pacman.move()
// blinky.show();
}
function checkPosition(){
if  ((pacman.pos.x-8)%16==0 && (pacman.pos.y-8-30)%16 == 0){
    positon = new vector((pacman.pos.x-8)/16,(pacman.pos.y-8-30)/16)   
    if ( !tiles[positon.y][positon.x].EATEN){
        tiles[positon.y][positon.x].EATEN=true
        pacman.score+=1;
    }
    positonToCheck = new vector(positon.x+pacman.turnTo.x, positon.y+pacman.turnTo.y)
    if (tiles[positonToCheck.y][positonToCheck.x].WALL){
        if (tiles[positon.y+pacman.vel.y][positon.x+pacman.vel.x].WALL)
            return false
        else return true
    }
    else{
        
        pacman.vel=pacman.turnTo
        return true
    }
    
    
} 
else {
    if ((pacman.pos.x+10*pacman.vel.x-8)%16 == 0 && (pacman.pos.y + 10*pacman.vel.y - 8-30)% 16 ==0) {//if 10 places off a critical position in the direction that pacman is moving
    //print((pos.x-8));
      positon = new vector((pacman.pos.x+10*pacman.vel.x-8)/16, (pacman.pos.y+10*pacman.vel.y-8-30)/16);//convert that position to an array position
      if (!tiles[positon.y][positon.x].EATEN ) {//if that tile has not been eaten 
        tiles[positon.y][positon.x].EATEN =true//eat it
        pacman.score +=1;
        // if (tiles[positon.y][positon.x].BIGDOT) {//big dot eaten
        // //   //set all ghosts as frightened
        //   blinky.frightened = true;
        //   blinky.flashCount = 0;
        //   clyde.frightened = true;
        //   clyde.flashCount = 0;
        //   pinky.frightened = true;
        //   pinky.flashCount = 0;
        //   inky.frightened = true;
        //   inky.flashCount = 0;
        // }
      }
    }
    if (pacman.turnTo.x + pacman.vel.x == 0 && pacman.vel.y + pacman.turnTo.y ==0) {//if turning chenging directions entirely i.e. 180 degree turn
        pacman.vel=pacman.turnTo
      return true;
    }
    return true;//if not on a critical postion then continue forward
  }


}
