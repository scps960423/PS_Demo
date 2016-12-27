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
})
