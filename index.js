let drumButtons = document.querySelectorAll(".drum").length;


for (let i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTMl = this.innerHTML;
        makeSound(buttonInnerHTMl);
        buttonAnimation(buttonInnerHTMl)
    })

}



function makeSound(key) {
    switch (key) {
        case "W":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-4.mp3")
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "k":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;

        case "l":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        default:
            break;
    }
}



document.addEventListener("keypress", function (event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}


