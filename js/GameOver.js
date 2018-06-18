gameOver=function(){
	gameStarted=false;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	gameinfo.style.display="none";
	playagain.style.display="block";
	endgame.innerHTML="Game Over! Your final score is "+score;
	endgame.style.display="block";
	bullets.splice(0,bullets.length);
	enemies.splice(0,enemies.length);
	enemyshots.splice(0,enemyshots.length);
	level=1;
	bulletspeed=2;
	enemytype=1;
	score=0;
	player1.health=3;
	player1.x=225;
	player1.y=420;
	//play again----------------------------------------------
	button7.addEventListener('mousedown', function(){
			playagain.style.display="none";
			gameinfo.style.display="block";
			endgame.style.display="none";
			gameStarted=true;
		});
}