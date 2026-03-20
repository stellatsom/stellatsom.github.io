var height = 6;
var width = 5;

var row = 0;
var col = 0;




var gameover = false;
var word = "SQUID";

window.onload = function () {
    initializeBoard();
}


function initializeBoard() {
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    document.addEventListener("keyup", (e) => {
        if (gameover) return;

        //alert(e.code);
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currtile = document.getElementById(row.toString() + "-" + col.toString());
                if (currtile.innerText == "") {
                    currtile.innerText = e.code[3];
                    col += 1;
                }
            }
        }

        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -= 1;
            }
            let currtile = document.getElementById(row.toString() + "-" + col.toString());
            currtile.innerText = "";
        }


        else if (e.code == "Enter" || e.code == "NumpadEnter") {
            update();
            row += 1;
            col = 0;

        }

        // if(!gameover&&row==height)
        // {
        //    gameover=true;
        //    document.getElementById("answer").innerText=word;
        //}
    })





}


function update() {
    let correct = 0;
    let letterCount = [];//kenny: {k:1, e:1, n:2, y:1}





    for (let c = 0; c < width; c++) {
        let currtile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currtile.innerText;

        //correct position



        if (word[c] == letter) {
            currtile.classList.add("correct");
            correct += 1;
        }
        else if (word.includes(letter)) {
            currtile.classList.add("present");
        }
        else {
            currtile.classList.add("notpresent");
        }

        if (correct == width) {
            gameover = true;
        }
    }
}





var modal = document.getElementById("modal");
var overlay = document.querySelector(".overlay");

const help = document.getElementById("helpButton");

var closeb = document.getElementById("close");


help.addEventListener("click", (e) => {
    overlay.classList.remove("hidden");
    overlay.classList.add("visible");
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    console.log("hello");

    
})

closeb.addEventListener("click", (e) => {
    modal.classList.add("hidden");
    modal.classList.remove("visible");
    overlay.classList.add("hidden");
    overlay.classList.remove("visible");
    console.log("h");

})

document.onclick = function (event) {
    if (!event.target.matches("#helpButton")) {
overlay.classList.add("hidden");
    overlay.classList.remove("visible");
        modal.classList.add("hidden");
        modal.classList.remove("visible");
        console.log("bye");
    }
}

help.addEventListener("click", event=>event.stopPropagation());













