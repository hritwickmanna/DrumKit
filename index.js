// document.querySelector("button").addEventListener("click",handleClick);
//
// function handleClick(){
//   alert("I got clicked");
// }

// document.querySelector("button").addEventListener("click",function(){
//   alert("I got clicked");
// });
//mouseclick
for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick); }

 function handleClick(){
  //console.log(this.style.color ="white");
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
var buttonClicked = this.innerHTML;//information regarding clicked button

sound(buttonClicked);
animation(buttonClicked);
}
//keyboard
document.addEventListener("keydown",function(event){//passing the event that trigrred the key pressed
  sound(event.key);
  animation(event.key);
});

//sound
function sound(key){

  switch (key) {
    case "w":
      var w = new Audio("sounds/crash.mp3");
      w.play();
      break;

    case "a":
      var a = new Audio("sounds/kick-bass.mp3");
      a.play();
      break;

    case "s":
      var s = new Audio("sounds/snare.mp3");
      s.play();
      break;

    case "d":
      var d = new Audio("sounds/tom-1.mp3");
      d.play();
      break;

    case "j":
      var j = new Audio("sounds/tom-2.mp3");
      j.play();
      break;

    case "k":
      var k = new Audio("sounds/tom-3.mp3");
      k.play();
      break;

    case "l":
      var l = new Audio("sounds/tom-4.mp3");
      l.play();
      break;

    default:
      console.log("Error");
  }
}

function animation(CurrentKey){
  var activeButton = document.querySelector("."+ CurrentKey); //add animation
  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed");},100); //removing the touched animation part fastly
}
