(function($) {
  'use strict';

  // Jquery Tag Input Starts
  if ($('#tags').length) {
    $('#tags').tagsInput({
      'width': '100%',
      'height': '75%',
      'interactive': true,
      'defaultText': 'Add More',
      'removeWithBackspace': true,
      'minChars': 0,
      'maxChars': 20, // if not provided there is no limit
      'placeholderColor': '#666666'
    });
  }

  // Jquery Tag Input Ends
  // Jquery Knob Starts Here

  $(function() {
    $(".dial").knob();
  });

  // Jquery Knob Ends Here
  // Jquery Bar Rating Starts

  $(function() {
    function ratingEnable() {
      $('#loginmodule-1to10').barrating('show', {
        theme: 'bars-1to10'
      });

      $('#loginmodule-movie').barrating('show', {
        theme: 'bars-movie'
      });

      $('#loginmodule-movie').barrating('set', 'Mediocre');

      $('#loginmodule-square').barrating('show', {
        theme: 'bars-square',
        showValues: true,
        showSelectedRating: false
      });

      $('#loginmodule-pill').barrating('show', {
        theme: 'bars-pill',
        initialRating: 'A',
        showValues: true,
        showSelectedRating: false,
        allowEmpty: true,
        emptyValue: '-- no rating selected --',
        onSelect: function(value, text) {
          alert('Selected rating: ' + value);
        }
      });

      $('#loginmodule-reversed').barrating('show', {
        theme: 'bars-reversed',
        showSelectedRating: true,
        reverse: true
      });

      $('#loginmodule-horizontal').barrating('show', {
        theme: 'bars-horizontal',
        reverse: true,
        hoverState: false
      });

      $('#loginmodule-fontawesome').barrating({
        theme: 'fontawesome-stars',
        showSelectedRating: false
      });

      $('#loginmodule-css').barrating({
        theme: 'css-stars',
        showSelectedRating: false
      });

      $('#loginmodule-bootstrap').barrating({
        theme: 'bootstrap-stars',
        showSelectedRating: false
      });

      var currentRating = $('#loginmodule-fontawesome-o').data('current-rating');

      $('.stars-loginmodule-fontawesome-o .current-rating')
        .find('span')
        .html(currentRating);

      $('.stars-loginmodule-fontawesome-o .clear-rating').on('click', function(event) {
        event.preventDefault();

        $('#loginmodule-fontawesome-o')
          .barrating('clear');
      });

      $('#loginmodule-fontawesome-o').barrating({
        theme: 'fontawesome-stars-o',
        showSelectedRating: false,
        initialRating: currentRating,
        onSelect: function(value, text) {
          if (!value) {
            $('#loginmodule-fontawesome-o')
              .barrating('clear');
          } else {
            $('.stars-loginmodule-fontawesome-o .current-rating')
              .addClass('hidden');

            $('.stars-loginmodule-fontawesome-o .your-rating')
              .removeClass('hidden')
              .find('span')
              .html(value);
          }
        },
        onClear: function(value, text) {
          $('.stars-loginmodule-fontawesome-o')
            .find('.current-rating')
            .removeClass('hidden')
            .end()
            .find('.your-rating')
            .addClass('hidden');
        }
      });
    }

    function ratingDisable() {
      $('select').barrating('destroy');
    }

    $('.rating-enable').click(function(event) {
      event.preventDefault();

      ratingEnable();

      $(this).addClass('deactivated');
      $('.rating-disable').removeClass('deactivated');
    });

    $('.rating-disable').click(function(event) {
      event.preventDefault();

      ratingDisable();

      $(this).addClass('deactivated');
      $('.rating-enable').removeClass('deactivated');
    });

    ratingEnable();
  });


  // Jquery Bar Rating Ends

})(jQuery);