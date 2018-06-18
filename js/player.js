function player() {
	this.Img=new Image();
	this.Img.src="img/player.png";
    this.x=225;
    this.y=420;
	this.health=3;
};
player.prototype.update=function(){
	if ((keys[37] || keys[65])&& this.x>0) this.x -= 5;
	if ((keys[39] || keys[68])&& this.x<450) this.x += 5;
}