window.onload=function(){
let time = 0;
let position = 0;
const timer = document.getElementById('timer');
const pause = document.getElementById('button');
const dino = document.querySelector(".dino");

const timerInterval= setInterval(()=>{

	         timer.textContent=time+"s";time+=1;
	         pause.onclick=()=>{clearInterval(gameInterval);};
		                   
                                   },20); 
clearTimeout(timerInterval);
	

let jumpin = false;

function jump(){
     if(jumpin) return;
	jumpin = true;   
                          // Time interval for in air
    let upInterval = setInterval(()=>{
                  
	       if(position>=150){ // if we are at the highest point
                     
		     clearInterval(upInterval);


		     // Time Interval to fall	
                     let downInterval = setInterval(()=>{  // function start here

                              if(position<=0){ // if we hit the ground

                                    clearInterval(downInterval);	

				    jumpin=false; // jumpin false here 
				    position=0;
                                  		   
       		              }else{
                                    position -=5;
				      
			             dino.style.bottom=`${position}px`;
			     
		               } },10);  //function end here(downInterval);
		   }else{
                     position+=20;
    		     dino.style.bottom = `${position}px`;

		   }},20);

        };

gameInterval
        
function checkCollision() {   // function to check collisions
    const dinoRect = dino.getBoundingClientRect(); 
    const obstacleRect = document.querySelector('.plants').getBoundingClientRect();

    if (
        dinoRect.right > obstacleRect.left &&
        dinoRect.left < obstacleRect.right &&
        dinoRect.bottom > obstacleRect.top
    ) {
        alert('Game Over!');
        clearInterval(gameInterval); // Stop the game
    }
}

var gameInterval = setInterval(checkCollision, 50);
}	   
    const obstacleRect = document.querySelector('.plants').getBoundingClientRect();

    if (
        dinoRect.right > obstacleRect.left &&   // if dino right is greater than 
        dinoRect.left < obstacleRect.right &&
        dinoRect.bottom > obstacleRect.top
    ) {
       timer.textContent="Game Over!";
        clearInterval(gameInterval); // Stop the game
    }


gameInterval = setInterval(checkCollision, 50);

document.addEventListener('keydown',(event)=>{
	//keydkown == look for keystrokes
        if(event.key ==='w' ||  event.code==='Space'){
            jump();	
	}
});
 




