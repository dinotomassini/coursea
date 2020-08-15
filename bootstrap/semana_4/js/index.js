
$(document).ready( function(e) {
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
  $('.carousel').carousel({
    interval: 2000
  });
});

// APERTURA DEL MODAL
$('#modalWin').on('show.bs.modal', function(e) {
  $('#btnModal').addClass('btn-outline-success');
  $('#btnModal').removeClass('btn-warning');
  $('#btnModal').addClass('disabled');
  console.log('El modal se esta mostrando');
});

// TERMINACION DE APERTURA DEL MODAL
$('#modalWin').on('shown.bs.modal', function(e) {
  console.log('El modal se termino de mostrar');
});

// CIERRE DEL MODAL
$('#modalWin').on('hide.bs.modal', function(e) {
  $('#btnModal').removeClass('btn-outline-success');
  $('#btnModal').addClass('btn-warning');
  $('#btnModal').removeClass('disabled');
  console.log('El modal se esta ocultando');
});

// TERMINACION DE CIERRE DEL MODAL
$('#modalWin').on('hidden.bs.modal', function(e) {
  console.log('El modal se termino de ocultar');
});