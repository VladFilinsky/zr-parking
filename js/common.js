$(function() {
	// Маска ввода номера телефона (плагин maskedinput)
  $('[name="Телефон"]').mask("+7(999) 999-99-99");
  // Модальное окно popup,с формой
$('.popup-with-form').on('click', function(event) {
  event.preventDefault();
  $('.white-popup-form > .h4').html('заказать звонок');
  $('.white-popup-form > button').html('заказать звонок');
});
$('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name',
    removalDelay: 500,
    mainClass: 'mfp-fade',
});

$('.js-open-video-popup').magnificPopup({
  type: 'iframe',
  iframe: {
  markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

  patterns: {
    youtube: {
      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

      id: 'v=', // String that splits URL in a two parts, second part should be %id%
      // Or null - full URL will be returned
      // Or a function that should return %id%, for example:
      // id: function(url) { return 'parsed id'; }

      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    },
    vimeo: {
      index: 'vimeo.com/',
      id: '/',
      src: '//player.vimeo.com/video/%id%?autoplay=1'
    },
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'
    }

    // you may add here more sources

  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}

});
});
