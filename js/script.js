function createSquares() {
    var mainStart = document.getElementsByClassName("main3")[0];
    var list = "";
    for (var i = 0; i < 64; i++) {
        list += "<div class='page3squares'>";
        for (var j = 0; j < 4; j++) {
            list += "<section onclick='clickedSquare(this)'></section>";
        }
        list += "</div>";
    }
    mainStart.innerHTML = list;
}

function clickedSquare(color) {
    if (color.id == "selectedSquare")
        color.id = "";
    else
        color.id = "selectedSquare";
}

{
    let count = 4;
    function circle() {
        if (count == 0) {

            for (var i = 0; i < 65; i++) {
                for (var j = 0; j < 4; j++) {
                    document.getElementsByClassName("page3squares")[i].children[j].style.borderRadius = "";
                }
            }
            count = 4;
            return;
        }
        for (var i = 0; i < 65; i++) {
            document.getElementsByClassName("page3squares")[i].children[4 - count].style.borderRadius = "360px"
        }
        count--;
    }
}
