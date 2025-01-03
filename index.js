var counter = 1;

$(".slide:not(#slide-" + counter + ")").addClass("in-active");

$(".slide").click(function() {
  changeSlide();
});

function changeSlide() {
  // Fade out the current slide
  $("#slide-" + counter).fadeOut(300, function() {
    // Increment the counter
    counter++;
    
    // Reset counter if it exceeds the number of slides
    if (counter > $(".slide").length) {
      counter = 1;
    }
    
    // Fade in the next slide
    $("#slide-" + counter).fadeIn(300);
  });
}
