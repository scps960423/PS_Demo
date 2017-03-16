$(document).ready(function() {
    $('#home').parallax("50%", 0.1);
    $('#second').parallax("50%", 0.1);
    $('#third').parallax("50%", 0.1);
    $('#forth').parallax("50%", 0.3);
    $('#five').parallax("50%", 0.3);

});

$(document).ready(function() {
    $(".test:eq(0)").click(function() {
        $("html,body").animate({
            "scrollTop": $("#home").offset().top
        })
    })
    $(".test:eq(1)").click(function() {
        $("html,body").animate({
            "scrollTop": $("#second").offset().top
        })
    })
    $(".test:eq(2)").click(function() {
        $("html,body").animate({
            "scrollTop": $("#third").offset().top
        })
    })
    $(".test:eq(3)").click(function() {
        $("html,body").animate({
            "scrollTop": $("#forth").offset().top
        })
    })
    $(".test:eq(4)").click(function() {
        $("html,body").animate({
            "scrollTop": $("#five").offset().top
        })
    })
})
