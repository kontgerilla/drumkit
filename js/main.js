document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "a":
            var hitbutton = document.getElementById("clap");
            hitbutton.style.border = "12px solid #1C08A2";
            document.getElementById("aclap").play();
            break;
        case "s":
            var hitbutton = document.getElementById("hihat");
            hitbutton.style.border = "12px solid #1C08A2";
            document.getElementById("ahihat").play();
            break;

        case "d":
            var hitbutton = document.getElementById("kick");
            hitbutton.style.border = "12px solid #1C08A2";
            document.getElementById("akick").play();
            break;

        case "f":
            var hitbutton = document.getElementById("openhat");
            hitbutton.style.border = "12px solid #1C08A2";
            document.getElementById("aopenhat").play();
            break;

        case "g":
            var hitbutton = document.getElementById("boom");
            hitbutton.style.border = "12px solid #1C08A2";
            document.getElementById("aboom").play();
            break;

        case "h":
            var hitbutton = document.getElementById("ride");
            hitbutton.style.border = "12px solid #1C08A2";
            document.getElementById("aride").play();
            break;

        case "j":
            var hitbutton = document.getElementById("snare");
            hitbutton.style.border = "12px solid #1C08A2";
            document.getElementById("asnare").play();
            break;

        case "k":
            var hitbutton = document.getElementById("tom");
            hitbutton.style.border = "12px solid #1C08A2";
            document.getElementById("atom").play();
            break;

        case "l":
            var hitbutton = document.getElementById("tink");
            hitbutton.style.border = "12px solid #1C08A2";
            document.getElementById("atink").play();
            break;
        default:
            break;

    }
})
document.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "a":
            var hitbutton = document.getElementById("clap");
            hitbutton.style.border = "solid #131313";
            // document.getElementById("aclap").currentTime = 0;
            // document.getElementById("aclap").pause();
            break;
        case "s":
            var hitbutton = document.getElementById("hihat");
            hitbutton.style.border = "solid #131313";
            // document.getElementById("ahihat").currentTime = 0;
            // document.getElementById("ahihat").pause();
            break;
        case "d":
            var hitbutton = document.getElementById("kick");
            hitbutton.style.border = "solid #131313";
            // document.getElementById("akick").currentTime = 0;
            // document.getElementById("akick").pause();
            break;
        case "f":
            var hitbutton = document.getElementById("openhat");
            hitbutton.style.border = "solid #131313";
            // document.getElementById("aopenhat").currentTime = 0;
            // document.getElementById("aopenhat").pause();
            break;
        case "g":
            var hitbutton = document.getElementById("boom");
            hitbutton.style.border = "solid #131313";
            // document.getElementById("aboom").currentTime = 0;
            // document.getElementById("aboom").pause();
            break;
        case "h":
            var hitbutton = document.getElementById("ride");
            hitbutton.style.border = "solid #131313";
            // document.getElementById("aride").currentTime = 0;
            // document.getElementById("aride").pause();
            break;
        case "j":
            var hitbutton = document.getElementById("snare");
            hitbutton.style.border = "solid #131313";
            // document.getElementById("asnare").currentTime = 0;
            // document.getElementById("aclap").pause();
            break;
        case "k":
            var hitbutton = document.getElementById("tom");
            hitbutton.style.border = "solid #131313";
            // document.getElementById("atom").currentTime = 0;
            // document.getElementById("atom").pause();
            break;
        case "l":
            var hitbutton = document.getElementById("tink");
            hitbutton.style.border = "solid #131313";
            // document.getElementById("atink").currentTime = 0;
            // document.getElementById("atink").pause();
    }
})
