function playSound(soundname) {
    var hitbutton = document.getElementById(soundname);
    hitbutton.classList.add("pressed");
    var newAd = new Audio("sounds/" + soundname + ".wav");
    newAd.play();
    return;
}

function unplaySound(soundname) {
    var hitbutton = document.getElementById(soundname);
    hitbutton.classList.remove("pressed");
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "a":
            playSound("clap");
            break;
        case "s":
            playSound("hihat");
            break;
        case "d":
            playSound("kick");
            break;
        case "f":
            playSound("openhat");
            break;
        case "g":
            playSound("boom");
            break;
        case "h":
            playSound("ride");
            break;
        case "j":
            playSound("snare");
            break;
        case "k":
            playSound("tom");
            break;
        case "l":
            playSound("tink");
            break;
        default:
            break;
    }
})
document.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "a":
            unplaySound("clap");
            break;
        case "s":
            unplaySound("hihat");
            break;
        case "d":
            unplaySound("kick");
            break;
        case "f":
            unplaySound("openhat");
            break;
        case "g":
            unplaySound("boom");
            break;
        case "h":
            unplaySound("ride");
            break;
        case "j":
            unplaySound("snare");
            break;
        case "k":
            unplaySound("tom");
            break;
        case "l":
            unplaySound("tink");
            break;
        default:
            break;
    }
})