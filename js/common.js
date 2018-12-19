$(function() {
	/* MASK FOR PHONE */
  $('[name="Телефон"]').mask("+7(999) 999-99-99");
  /* MODAL "FORM-CALLBACK" */
$('.popup-with-form').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');}},
    midClick: true});
/* CLOSE MODAL "THANKS" */
  $('.js-close-thank-you').click(function() { // по клику на крестик
  $('.js-overlay-thank-you').fadeOut();
  });
  $(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $('.js-overlay-thank-you').fadeOut();
    }
  });
/* MODAL "VIDEO" */
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
      src: '//player.vimeo.com/video/%id%?autoplay=1'},
    gmaps: {
      index: '//maps.google.',
      src: '%id%&output=embed'}},
  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}
});
});
