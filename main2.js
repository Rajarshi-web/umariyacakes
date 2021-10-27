$('#slider').owlCarousel({
     autoplay: true,
    dots: true,
    loop:true,
    margin:10,
    
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
})