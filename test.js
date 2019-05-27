$(".hamburger").click(function () {
    event.stopPropagation();
    $(this).toggleClass("active");
    $(".menuBar").toggleClass("active");
})
$("html").click(function () {
    $(".hamburger").removeClass("active")
    $(".menuBar").removeClass("active");
})
