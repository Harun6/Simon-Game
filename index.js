let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

$(".btn").click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern)
});



function nextSequence(){
    let randomnumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomnumber];

    gamePattern.push(randomChosenColour);   

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name){
    let audio = new Audio("sounds" + name + ".mp3");
    audio.play();
}





