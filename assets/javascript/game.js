// Selects random number between 19 and 120 at game start
//$( document ).ready(function(){
var Random=Math.floor(Math.random()*101+19)
  

// Adds random number to the randomNumber id in the html
$('#randomNumber').text(Random);
  

// Sets up random numbers for each crystal between 1 and 12
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)


//  Tally Variables
var userTotal= 0; 
var wins= 0;
var losses = 0;


$('#numberWins').text(wins);
$('#numberLosses').text(losses);


// Game reset
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
    } 


// Adds wins to userTotal
function win(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}


// Adds loss to userTotal
function lose(){
alert ("Sorry, Try Again!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}


// Click event for jewels
  $('#one').on('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          
// Win/lose conditions
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
  })  

  $('#two').on('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
  }) 

  $('#three').on('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);

// Win/lose conditions
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })

  $('#four').on('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }
  });   
//}); 