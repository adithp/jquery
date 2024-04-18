$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:15,
        nav:true,
        loop:true,
        items:4,
        navText: ["<button class='prev'>Prev</button>,<button class='next'>next</button>"],
        responsive: {
            0: {
                items: 1,
            },
            640: {
                items:3,
            }
        },
    });
})