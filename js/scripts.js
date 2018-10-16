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

});
