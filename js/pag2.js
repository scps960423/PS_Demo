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
});
