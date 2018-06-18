var bulletTimeout=6;
function Bullet(x,y,speed){
	this.Img=new Image();
	this.Img.src="img/bullet.png";
	this.x=x;
	this.y=y;
	this.speed=speed;
}
Bullet.prototype.update=function(){
	this.y+=this.speed;
}