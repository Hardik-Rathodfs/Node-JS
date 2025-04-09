(function($) {
  'use strict';
  $(document).ready(function() {
    // Todo list functionality
    $('.todo-list').on('click', '.todo-item', function() {
      $(this).toggleClass('completed');
    });
  });
})(jQuery); 