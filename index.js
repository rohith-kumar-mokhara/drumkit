// function handle() {
//     let audio = new Audio("crash.mp3")
//     audio.play()
// }
let elem = document.getElementsByClassName("drum");
// for (let i = 0; i < elem.length; i++) {

//     elem[i].addEventListener("click", handle)//we do not write handle() as it calls the handle function as soon as we add the event listener
// }
for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
        sound(this.innerHTML)
        animate(this.innerHTML)
    })//this is another way, the inside function is known as anonymous function
}

document.addEventListener("keydown",function(event){
    console.log("key pressed is ",event.key)
    sound(event.key)
    animate(event.key)
})

function sound(a){
    switch (a) {
        case "w":
            audio=new Audio("sounds/crash.mp3")
            audio.play()
            break;
        case "a":
            audio=new Audio("sounds/kick-bass.mp3")
            audio.play()
            break;
        case "s":
            audio=new Audio("sounds/snare.mp3")
            audio.play()
            break;
        case "d":
            audio=new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
        case "j":
            audio=new Audio("sounds/tom-2.mp3")
            audio.play()
            break;
        case "k":
            audio=new Audio("sounds/tom-3.mp3")
            audio.play()
            break;
        case "l":
            audio=new Audio("sounds/tom-4.mp3")
            audio.play()
            break;
      
        default:
            break;
      }
}

function animate(a){
    let drum_class= document.querySelector("."+a);
    drum_class.classList.add("pressed")
    setTimeout(function(){
        drum_class.classList.remove("pressed")
    },100)
}
