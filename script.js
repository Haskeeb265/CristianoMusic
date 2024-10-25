$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true, 
        loop: true,  
        margin: 50,  
        items: 5,  
        autoplay: true, 
        autoplayTimeout: 3000, 
        responsive: {
            0: {
                items: 2, 
                center: true
            },
            576: {
                items: 4, 
            },
            1000: {
                items: 5 
            }
        }
    });
});
