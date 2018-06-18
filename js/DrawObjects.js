drawObjects = function() {  
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(player1.Img,player1.x,player1.y,radius*0.2,radius*0.2);
	  for(var i=0,len=enemies.length;i<len;i++)
	  {
		var e=enemies[i];
		ctx.drawImage(e.Img,e.x,e.y,radius*0.2,radius*0.2);
		e.update();
	  }
	  for(var i=0,len=bullets.length;i<len;i++)
	  {
		var b=bullets[i];
		ctx.drawImage(b.Img,b.x,b.y);
		b.update();
	  }
	  for(var i=0,len=enemyshots.length;i<len;i++)
	  {
		var s=enemyshots[i];
		ctx.drawImage(s.Img,s.x,s.y);
		s.update();
	  }
	  var hiscore=document.getElementById("HIscore").innerHTML;
	  document.getElementById("score").innerHTML=score;
	  if(score>hiscore)
		document.getElementById("HIscore").innerHTML=score;
	  document.getElementById("level").innerHTML=level;
	  document.getElementById("Health").innerHTML=player1.health;
	  bulletTimeout+=0.5;
    };