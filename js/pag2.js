$(document).ready(function() {
    for (var j = 0; j < 6; j++) {
        $(".p2_but:eq(" + j + ")").click({
            id: j
        }, function(e) {
            for (var i = 0; i <= 5; i++)
                if (i != e.data.id) $(".p2_main:eq(" + i + ")").slideUp("slow");
            $(".p2_main:eq(" + e.data.id + ")").slideToggle("slow");
        });
    }

    for (var j = 0; j < 3; j++) {
        $(".p3_but:eq(" + j + ")").click({
            id: j
        }, function(e) {
            for (var i = 0; i <= 5; i++)
                if (i != e.data.id) $(".p3_rwdMain:eq(" + i + ")").slideUp("slow");
            $(".p3_rwdMain:eq(" + e.data.id + ")").slideToggle("slow");
        });
    }

    $(".p4_c:eq(0)").click(function() {

        // if (i != e.data.id) $(".p3_rwdMain:eq(" + i + ")").slideUp("slow");
        $(".p4_main_1").slideToggle("slow");

    });




});
