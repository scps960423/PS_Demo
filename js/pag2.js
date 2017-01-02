$(document).ready(function() {
    $(".p2_1").click(function() {
        for (var i = 0; i <= 5; i++)
            if (i != 0) $(".p2_main:eq(" + i + ")").slideUp("slow");
        $(".p2_main:eq(0)").slideToggle("slow");
    });
    $(".p2_2").click(function() {
        for (var i = 0; i <= 5; i++)
            if (i != 1) $(".p2_main:eq(" + i + ")").slideUp("slow");

        $(".p2_main:eq(1)").slideToggle("slow");
    });
    $(".p2_3").click(function() {
        for (var i = 0; i <= 5; i++)
            if (i != 2) $(".p2_main:eq(" + i + ")").slideUp("slow");
        $(".p2_main:eq(2)").slideToggle("slow");
    });
    $(".p2_4").click(function() {
        for (var i = 0; i <= 5; i++)
            if (i != 3) $(".p2_main:eq(" + i + ")").slideUp("slow");
        $(".p2_main:eq(3)").slideToggle("slow");
    });
    $(".p2_5").click(function() {
        for (var i = 0; i <= 5; i++)
            if (i != 4) $(".p2_main:eq(" + i + ")").slideUp("slow");
        $(".p2_main:eq(4)").slideToggle("slow");
    });
    $(".p2_6").click(function() {
        for (var i = 0; i <= 5; i++)
            if (i != 5) $(".p2_main:eq(" + i + ")").slideUp("slow");
        $(".p2_main:eq(5)").slideToggle("slow");
    });
});
