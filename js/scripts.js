$(function() {
  $(".clickable").click(function() {
    $("#shown").slideToggle();
    $("#hidden").slideToggle();
  });

  $(".clickIn").click(function() {
    $("#fadeOut").fadeIn();
  });

  $(".clickOut").click(function() {
    $("#fadeOut").fadeOut();
  });

  // Theme Switch Functions
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("themeTwo");
  });

  $("button#light").click(function() {
    $("body").removeClass();
  });

  $("p").click(function() {
    $("p").addClass("highlight");
  });

});
