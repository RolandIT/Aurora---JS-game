	control = function() {
	  player1.update(); //player motion
	  if(keys[32] && bulletTimeout>=6){
		  bulletTimeout=0;
		  if(sound==true)
			document.getElementById('Shot').play();
		  bullets.push(new Bullet(player1.x,player1.y,-5))
		  bullets.push(new Bullet(player1.x+42,player1.y,-5))
	  }
	  		//left--------------------------------------------------
		button1.addEventListener('mousedown', function(){
			keys[65]=true;
		});
		button1.addEventListener('mouseup',function(){
			keys[65]=false;
			
		});
		//shoot----------------------------------------------------
		button2.addEventListener('mousedown', function(){
			keys[32]=true;
		});
		button2.addEventListener('mouseup',function(){
			keys[32]=false;
		});
		//right-----------------------------------------------------
		button3.addEventListener('mousedown', function(){
			keys[68]=true;
		});
		button3.addEventListener('mouseup',function(){
			keys[68]=false;
		});
    };