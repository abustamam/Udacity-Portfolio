$(function() {
    // Scrolls to the selected menu item on the page
    // $('a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
    //
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top - 50
    //             }, 1000);
    //             return false;
    //         }
    //     }
    // });


  //
  // $('#about').waypoint(function(direction) {
  //   alert('50px')
  // }, {
  //   offset: '50px'
  // });

  // highlight selected region
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
