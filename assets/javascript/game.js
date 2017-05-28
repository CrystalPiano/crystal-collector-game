// ==============  NOTES  ===============



// ==============  VARIABLES  ===============

// Selects random number between 19 and 120 at game start
var targetRandom = Math.floor(Math.random()*101+19);

// Sets up random numbers for each crystal between 1 and 12
var crystal1 = Math.floor(Math.random()*11+1);
var crystal2 = Math.floor(Math.random()*11+1);
var crystal3 = Math.floor(Math.random()*11+1);
var crystal4 = Math.floor(Math.random()*11+1);

//  Tally Variables
var userTotal = 0; 
var wins = 0;
var losses = 0;



// ==============  EVENTS  ===================

// Adds random number to the randomNumber id in the HTML
$("#randomNumber").html(targetRandom);

// Adds wins and losses to their corresponding ids in HTML
$('#numberWins').html(wins);
$('#numberLosses').html(losses);



// ==============  FUNCTIONS  ================

// Opening animation for crystals
$("#one").load('load', function(){
  $("#one").velocity({translateY: "-50px", rotateZ: "360deg"});
  $("#one").velocity({translateY: "0px", rotateZ: "0deg"});
  $("#two").velocity({translateY: "-50px", rotateZ: "360deg"},{ delay:200 });
  $("#two").velocity({translateY: "0px", rotateZ: "0deg"});
  $("#three").velocity({translateY: "-50px", rotateZ: "360deg"},{ delay:400 });
  $("#three").velocity({translateY: "0px", rotateZ: "0deg"});
  $("#four").velocity({translateY: "-50px", rotateZ: "360deg"},{ delay:600 });
  $("#four").velocity({translateY: "0px", rotateZ: "0deg"});
});


// Game reset
function reset(){
  targetRandom = Math.floor(Math.random()*101+19);
  console.log(targetRandom)
  $('#randomNumber').text(targetRandom);
  crystal1 = Math.floor(Math.random()*11+1);
  crystal2 = Math.floor(Math.random()*11+1);
  crystal3 = Math.floor(Math.random()*11+1);
  crystal4 = Math.floor(Math.random()*11+1);
  userTotal = 0;
  $('#finalTotal').html(userTotal);
};


// Click events and on click animations for jewels
  $('#one').on('click', function(){
    userTotal = userTotal + crystal1;
    $("#one").velocity({translateY: "-50px", rotateZ: "360deg" });
    $("#one").velocity({translateY: "0px", rotateZ: "0deg" });
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal);
          
// Win/lose conditions
      if (userTotal === targetRandom){
        win();
      }
      else if (userTotal > targetRandom){
        lose();
    }   
  });  

  $('#two').on('click', function(){
    userTotal = userTotal + crystal2;
    $("#two").velocity({translateY: "-50px", rotateZ: "360deg"});
    $("#two").velocity({translateY: "0px", rotateZ: "0deg"});
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal); 
      if (userTotal === targetRandom){
        win();
      }
      else if (userTotal > targetRandom){
        lose();
    } 
  });

  $('#three').on('click', function(){
    userTotal = userTotal + crystal3;
    $("#three").velocity({translateY: "-50px", rotateZ: "360deg"});
    $("#three").velocity({translateY: "0px", rotateZ: "0deg"});
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal);
      if (userTotal === targetRandom){
        win();
      }
      else if (userTotal > targetRandom){
        lose();
    } 
  });

  $('#four').on('click', function(){
    userTotal = userTotal + crystal4;
    $("#four").velocity({translateY: "-50px", rotateZ: "360deg"});
    $("#four").velocity({translateY: "0px", rotateZ: "0deg"});
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').html(userTotal); 
      if (userTotal === targetRandom){
        win();
      }
      else if (userTotal > targetRandom){
        lose();
    }
  });


// Adds wins to userTotal
function win(){
alert("You Did It!");
  wins++; 
  $('#numberWins').html(wins);
  reset();
};

// Adds loss to userTotal
function lose(){
alert("Sorry, Try Again!");
  losses++;
  $('#numberLosses').html(losses);
  reset()
};