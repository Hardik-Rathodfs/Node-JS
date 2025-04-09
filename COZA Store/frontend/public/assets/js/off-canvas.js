(function($) {
  'use strict';
  $(document).ready(function() {
    // Off-canvas functionality
    $('.js-offcanvas').on('click', function() {
      $('.sidebar-offcanvas').toggleClass('active');
    });
  });
})(jQuery); 