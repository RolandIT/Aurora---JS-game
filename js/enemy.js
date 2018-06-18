function enemy(rychlost,enemytype){
		this.Img=new Image();
		this.Img.src="img/enemy"+enemytype+".png";
		this.x=Math.floor(Math.random()*460);
		this.y=-50;
		this.rychlost=rychlost;
}
enemy.prototype.update=function(){
		this.y+=this.rychlost;
}