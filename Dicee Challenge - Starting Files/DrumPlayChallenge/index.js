var drumList = document.querySelectorAll(".drum");

function drumPlay(buttonIn){
        switch (buttonIn){
          case "w":
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;

          case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

          
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
          
                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;


          case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            case "l":
                var carsh = new Audio("sounds/crash.mp3");
                carsh.play();
                break;

                default:
                    console.log(buttonIn);
        }
}
for(var i=0;i<drumList.length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     drumPlay(this.innerHTML);
     buttonAnimation(this.innerHTML);
    });
}


document.addEventListener("keydown",function(event){
    drumPlay(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
 var button = document.querySelector("."+currentKey);
 button.classList.add("pressed");
 setTimeout(function(){
    button.classList.remove("pressed");
 },100)
}
