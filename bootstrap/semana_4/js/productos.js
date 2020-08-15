$(function () {
  $('[data-toggle="popover"]').popover();
});

$('#solapas a').on('click', (e) => {
  e.preventDefault();
  $(this).tab('show');
});