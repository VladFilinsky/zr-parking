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

});
