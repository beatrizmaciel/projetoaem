var slideIndex = 0;
displaySlides();

function displaySlides() {
    var i;
    var allSlides = document.getElementsByClassName("slidebox");
    for (i = 0; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> allSlides.length) {slideIndex = 1}
    allSlides[slideIndex-1].style.display = "block";
    setTimeout(displaySlides, 2000);
}