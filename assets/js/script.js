$(function() {
  var sections = $('.sec');
  var navigation_links = $('nav li');


  sections.waypoint({
    handler: function(direction) {
      var active_section;
      active_section = this;
      if (direction === "up") {
        active_section = active_section.previous();
      }
      var active_link = $('nav li a[href="#' + active_section.element.id + '"]').parent();
      navigation_links.removeClass("active");
      active_link.addClass("active");
    },
    offset: '35%'
  });


  $("nav li a, .btn").click(function(event){
    event.preventDefault();
    $.scrollTo(
        $(this).attr("href"),
        {
          duration: 1000,
          offset: { 'left':0, 'top':-50 }
        }
      );
  });
});
