$(document).ready(function() {
    $('a[href*=#]').each(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname && this.hash.replace(/#/,'') ) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
            var $target = $targetId.length ? 
                $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top;
                $(this).click(function() {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');
                    $('html, body').animate({scrollTop: targetOffset}, 1000);
                    return false;
                });
            }
        }
    });
    $(window).scroll(function() {
        const sections = ['about', 'skills', 'work-exp', 'projects', 'extras'];
        for (var i = 0; i < sections.length; i++) {
            var sectString = '#'+sections[i];
            var hT = $(sectString).offset().top,
                hH = $(sectString).outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop() + 800;
            if (wS > (hT+hH-wH)){
                $("#nav li a").removeClass("active");
                $("a[href$='"+sectString+"']").addClass('active');
            }
        }
    });
}); 