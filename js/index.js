var banner = document.getElementById("banner");
var bannerList = banner.getElementsByTagName("li");
var tip = document.getElementById("tip");
var tipList = tip.getElementsByTagName("li");

var step = 0;
var autoTimer = null;
function autoMove() {
    step++;
    if (step > 4) {
        banner.style.left = 0 + "px";
        step = 1;
    }
    animate(banner, {left: -step * 700}, 500,3);
    change();
}
autoTimer = window.setInterval(autoMove, 3000);
function change() {
    var temp = step >= tipList.length ? 0 : step;
    for (var i = 0; i < tipList.length; i++) {
        tipList[i].className = i === temp ? "select" : null;
    }
}
for (var i = 0; i < tipList.length; i++) {
    ~function (i) {
        tipList[i].i = i;
        tipList[i].onmouseover = function () {
            window.clearInterval(autoTimer);
            animate(banner, {left: -this.i * 700}, 500,3);
            step = this.i;
            autoTimer = window.setInterval(autoMove, 3000);
            change();
        }
    }(i);
}

