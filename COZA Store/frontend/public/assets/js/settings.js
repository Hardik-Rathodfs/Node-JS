(function($) {
  'use strict';
  $(document).ready(function() {
    // Settings functionality
    $('.settings-panel .toggler').on('click', function() {
      $('.settings-panel').toggleClass('show');
    });
  });
})(jQuery); 