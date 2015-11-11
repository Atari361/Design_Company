$(document).ready(function(){
    $('a[href*=#]:not([href=#], [href=#reviews-carousel])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
             }, 1000);
            return false;
           }
        }
    });   
    $( "#team-carousel .sub-item" ).mouseover(function() {
        //$( this ).find('.teammate-photo img').attr("src", "images/teammate-.jpg");
        var img_url = $( this ).find('.teammate-photo img').attr("src");
        
        img_url = img_url.replace(/_bw/g, "");
        $( this ).find('.teammate-photo img').attr("src", img_url);
        $( this ).find('.teammate-photo img').animate({
            width: "260px",
            paddingTop: 0
        }, 100);
    });
    $( "#team-carousel .sub-item" ).mouseleave(function() {
        $( this ).find('.teammate-photo img').animate({
            width: "235px",
            paddingTop: "30px"
        }, 100);
        var img_url = $( this ).find('.teammate-photo img').attr("src");
        img_url = img_url.replace(/.jpg/g, "_bw.jpg");
        $( this ).find('.teammate-photo img').attr("src", img_url);
    });
    $('#reviews-carousel').carousel({
    });
    $('#team1-carousel').carousel({
    });
    
});
