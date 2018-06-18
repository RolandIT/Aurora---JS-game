colisionDetection=function(){
		console.log(enemies.length);
		for(var j=0;j<enemies.length;j++)
		{
			var e=enemies[j];
			len=bullets.length;
			for(var i=0;i<len;i++)
			{
				var b=bullets[i];
				if(b.y+10 <0) //ked je mimo canvasu 
				{
					bullets.splice(i,1);//vymaze bullet
					i--;
					len--;
					continue;
				}
				if((b.x<=e.x+35 && b.x>=e.x) && (b.y<=e.y+15 && b.y>=e.y))
				{
					bullets.splice(i,1);//vymaze bullet
					i--;
					len--;
					enemies.splice(j,1);
					score+=50*level;
				}
			}
			//base
			if(e.y>=425)
			{
				bullets.splice(0,bullets.length);
				enemies.splice(0,enemies.length);
				gameOver();
			}
			//player
			if(e.y>=player1.y-35 && (e.x+30>=player1.x && e.x<= player1.x+35))
			{
				bullets.splice(0,bullets.length);
				enemies.splice(0,enemies.length);
				gameOver();
			}
		}
		for(var i=0;i<enemyshots.length;i++)
		{	
			s=enemyshots[i];
			if(s.y>=460)
				enemyshots.splice(i,1);
			if(s.y>=player1.y-5 && (s.x+5>=player1.x && s.x<= player1.x+45))
			{
			  if(player1.health>=2)
			  {
				enemyshots.splice(i,1);
				player1.health--;
			  }
			  else
			  {
				bullets.splice(0,bullets.length);
				enemies.splice(0,enemies.length);
				gameOver();
			  }
			}
		}
	}