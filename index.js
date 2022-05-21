var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case 'w':
            
            var crass = new Audio("sounds/crash.mp3");
            crass.play();
            
            break;
    
        case 'a':
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
    
        case 's':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case 'j':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case 'k':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case 'l':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.toggle("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}






//***********This things are only for my reference****************** */
// function BellBoy(name,age,permit,language){  //this is a constructor ,It not follow camelcase naming
//     this.name = name ;
//     this.permit=permit ;
//     this.age = age ;
//     this.language = language ;
//     this.clean = function(){
//         console.log("Cleaning in progress");
//     }
// }

// var housekepper1 = new BellBoy("ramesh",19,true,["English","Hindi"]);

// var housekepper ={
//     name :"Puku",
//     age : "18" ,
//     language: ["english" ,"hindi"]
// }
// console.log(housekepper.name) ;

// alert("I have been clicked");
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// document.addEventListener("keypress",function(event){
//     // var element = "."+event.key;
//     // console.log(event.key);
//     makeSound(event.key);
//     buttonAnimation(event.key);
//     // console.log(this);
//     // alert("Key is Pressed");
//     // console.log();
//     // document.querySelector(element).click();
// });
