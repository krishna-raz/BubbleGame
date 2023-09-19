var reandomhit = 0;
var timebubble = 30;
var score = 0;
var hitgive = 0;






document.getElementById("pain3").addEventListener("click", function (e) {

    hitgive = Number(e.target.innerHTML);
    if (hitgive == reandomhit) {
        increaseScore();
        hit();
    }

}
);

function runtime() {
    setInterval(function () {

        if (timebubble > 0) {
            timebubble--;
            document.getElementById("time").innerHTML = timebubble;
        }
        else {
            document.getElementById("pain3").innerHTML = `<h1>Game Over</h1>`;


        }
    }, 1000);




}


function hit() {
    reandomhit = Math.floor(Math.random() * 10);
    document.getElementById("hit").innerHTML = reandomhit;


}


function makebubble() {
    var bub2 = "";

    for (var i = 1; i <= 90; i++) {
        var rn = Math.floor(Math.random() * 10);
        bub2 += `<div class="bubble">${rn}</div>`;
    }

    document.getElementById("pain3").innerHTML = bub2;

}

function increaseScore() {
    score += 10;
    document.getElementById("score").innerHTML = score;

}

makebubble();

hit();
runtime();
