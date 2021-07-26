
// randomClassSelector=(Math.floor(Math.random()*4)+1);
// $(".btn").eq(randomClassSelector).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// var a=$(".btn").eq(randomClassSelector);

buttonColors=["red","blue","green","yellow"];
var gamePattern=[];


var started=false;
var level=0;
var userChosenPattern=[];

$(document).keypress(function() {
    if(!started){
    $("#level-title").text("Level " + level);
     
     nextSequence();
     started=true;
    };
     
 });
 $(".btn").on("click", function(evnt) {
  var userChosenColor = $(this).attr("id");
    
    userChosenPattern.push(userChosenColor);
 
    playSound(userChosenColor);
    animatePress(userChosenColor);

  checkAnswer(userChosenPattern.length-1);
    
 });
 



function nextSequence() {
   
    level++;
      userChosenPattern=[];

        
    $("#level-title").text("Level " + level);
  
    

    
     var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);


};




function playSound(name) {

    var audio=new Audio("sounds/"+name+".mp3");
audio.play();
}

function animatePress(currentColor) {

    $("#"+currentColor).addClass("pressed");

    setTimeout(function() {

    $("#"+currentColor).removeClass("pressed");
        
    },100);
    
};
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] ===  userChosenPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if ( userChosenPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      var audio=new Audio("sounds/wrong.mp3");
      audio.play();


    
      $("h1").text("Game-over press any key to restart");

      $("body").addClass("game-over");
      setTimeout(function () {
      $("body").removeClass("game-over");
       
        
      },200);

      startOver();


    };

};

function startOver() {
  
level=0;
 gamePattern=[];
started=false;


};





// $(window).on("click",function() {
    
//      nextSequence();
     
//     if(gamePattern=userChosenPattern){
//         $("h1").text("inc")
//     }
//     else{
//         $("h1").text("loss")
//     }
// });
