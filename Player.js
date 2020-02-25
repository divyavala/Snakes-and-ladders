class Player{
    constructor(){
        this.spot=0;
    }
reset(){
    player.spot=0;
}
    roll(){
        let r=floor(random(1,6));
        this.spot+=r;
    }
    show(tiles){
        let current=tiles[this.spot];
        fill(255);
        let center=current.getCenter();
        ellipse(center[0],center[1],32);
    }
}