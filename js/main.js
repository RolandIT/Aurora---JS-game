	var canvas;
    var ctx;
	var radius;
	var enemytype=1;
	var score=0;
    var keys = {};
	var level=1;
	var bulletspeed=2;
	var sound=true;
	var button4;
	var button3;
	var button2;
	var button1;
	var Audio;
	var timer=new Date().getTime();
	var timer2=new Date().getTime();
	var timer3=new Date().getTime();
	var timer4=new Date().getTime();
	Audio.volume=0.05;

	var bullets=[];
	var enemies=[];
	var enemyshots=[];
	var player1=new player;
	var gameStarted=false;

	// Main loop
	function mainLoop() {
	  Menu();
	  Game();
	  // Loop animation
      requestAnimationFrame(mainLoop); 
    }
	// Initialization
	window.onload = function() {
      canvas = document.getElementById("canvas");
	  button1 = document.getElementById('button');
	  button2 = document.getElementById('button2');
	  button3 = document.getElementById('button3');
	  button4 = document.getElementById('button4');
	  button5 = document.getElementById('Play');
	  button6 = document.getElementById('Controls');
	  button7 = document.getElementById('playAgain');
	  button8 = document.getElementById('Back');
	  gameinfo=document.getElementById('gameinfo');
	  menu=document.getElementById('menu');
	  playagain=document.getElementById('playAgain');
	  endgame=document.getElementById('endgame');
	  howto=document.getElementById('howto');
	  enemyshotsound=document.getElementById('enemyShot');
	  Audio=document.getElementById('backgroundSound');
	  document.getElementById("level").innerHTML=level;
	  ctx = canvas.getContext("2d");
      radius=canvas.width/2;
      requestAnimationFrame(mainLoop);
    };
	// Handle events
	window.onkeydown = function(event) {
      keys[event.keyCode] = true;
    };
    window.onkeyup = function(event) {
      keys[event.keyCode] = false;
    };
