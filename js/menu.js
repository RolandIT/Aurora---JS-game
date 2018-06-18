Menu=function(){
	
	//play---------------------------------------------------
	button5.addEventListener('mousedown', function(){
			menu.style.display="none";
			gameinfo.style.display="block";
			gameStarted=true;
		});
	//controls---------------------------------------------------

	button6.addEventListener('mousedown', function(){
			menu.style.display="none";
			howto.style.display="block";
				button8.addEventListener('mousedown', function(){
					howto.style.display="none";
					menu.style.display="block";
			});
		});
	
	//mute-------------------------------------------------------
	if(keys[77])
	  {
		 if(timer-new Date().getTime()<=-1000)
			{
				timer=new Date().getTime();
				if(sound==true)
				{
					Audio.pause();
					sound=false;
				}
				else
				{
					Audio.play();
					sound=true;
				}
			}
	  }
		button4.addEventListener('click', function(){
			if(timer-new Date().getTime()<=-1000)
			{
				timer=new Date().getTime();
				if(sound==true)
				{
					Audio.pause();
					sound=false;
				}
				else
				{
					Audio.play();
					sound=true;
				}
			}
		});
}