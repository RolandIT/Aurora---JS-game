enemyspawn=function()
	{
			if(enemies.length<=10)
				enemies.push(new enemy(level,enemytype));
	};
	levelup=function(){
			if(level<5)
			{
				if(level==2)
					enemytype=2;
				level++;
				bulletspeed++;
			}
	};
	enemyshoot=function(){
			if(enemyshots<=20)
			{
				for(var i=0;i<enemies.length;i++)
				{	
					if(sound==true)
						enemyshotsound.play();
					var shot=new Bullet(enemies[i].x+22,enemies[i].y+45,bulletspeed);
					shot.Img.src="img/enemybullet.png";
					enemyshots.push(shot);
				}
			}
	}
	Game=function(){
	  if(gameStarted)
	  {
		if(timer2-new Date().getTime()<=-2000)
		{
			timer2=new Date().getTime();
			enemyspawn();
		}
		if(timer3-new Date().getTime()<=-1000)
		{
			timer3=new Date().getTime();
			enemyshoot();
		}
		if(timer4-new Date().getTime()<=-25000)
		{
			timer4=new Date().getTime();
			levelup();
		}
		//detectColisions
		colisionDetection();
		//animate
		control();
		//draw
		drawObjects();
	  }
	  else
	  {
		timer2=new Date().getTime();
		timer3=new Date().getTime();
		timer4=new Date().getTime();
	  }
	}