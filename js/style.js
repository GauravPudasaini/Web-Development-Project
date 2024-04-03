$(window).scroll(function() {
    var darkSection = $("#dark-section").offset().top;
    var scroll = $(window).scrollTop();
    if (scroll >= darkSection) {
        $("#logo-dark").show();
        $("#logo-light").hide();
        $("nav ul li a").css("color", "#000000")
    } else {
        $("#logo-dark").hide();
        $("#logo-light").show();
        $("nav ul li a").css("color", "#ffffff")
    }
})
$("nav ul li a").hover(
    function() {
        $(this).css("color", "#2DD62D");
    },
    function() {
        var darkSection = $("#dark-section").offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= darkSection) {
            $(this).css("color", "#000000");
        } else {
            $(this).css("color", "#ffffff");
        }
    }
);