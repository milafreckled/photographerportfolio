$(document).ready(function(){
    $('.header').height($(window).height());
})
$('.carousel').carousel({
    interval: 2000,
    pause: "hover"
})

/*window.onclick = changeColor;

function changeColor() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}*/
$(document).image(function() {
    onmspointerover(this, event.BLUR);
})
//document.getElementsByName(`img[src = "images/carousel-2.jpg"]` ).
function changeDesc(el) {
    el.innerHTML = "KU - KU!";
}
