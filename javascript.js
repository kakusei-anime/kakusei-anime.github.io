var fadeElements = document.getElementsByClassName("fade");
var fadeElementTops = [];
for (var i = 0; i < fadeElements.length; i++) {
    var fadeElementTop = fadeElements[i].getBoundingClientRect().top + window.pageYOffset;
    fadeElementTops.push(fadeElementTop);
}

window.addEventListener("scroll", function() {
    var h = window.innerHeight;
    var y = window.pageYOffset;
    for (var i = 0; i < fadeElementTops.length; i++) {
        if (h * 0.9 + y > fadeElementTops[i]) {
            fadeElements[i].classList.add("fade-active");
        }
        else {
            fadeElements[i].classList.remove("fade-active");
        }
    }
}, false);
