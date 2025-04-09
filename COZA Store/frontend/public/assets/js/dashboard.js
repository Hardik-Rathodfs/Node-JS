(function($) {
  'use strict';
  $(document).ready(function() {
    // Dashboard functionality
    if ($('#sales-chart').length) {
      const ctx = document.getElementById('sales-chart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });
    }
  });
})(jQuery); 