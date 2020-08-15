$('#collapse_button_close').on('click', (e) => {
  e.preventDefault();
  $('#historia_collapse').collapse('hide');
  $('#ubicacion_collapse').collapse('hide');
  $('#materiales_collapse').collapse('hide');
});