$(function() {

  // Launch modal on load
  $('#add-columns-modal').addClass('show');

  // create main layout
  $('#add-columns-btn').click(function() {
    $('#add-columns-modal').removeClass('show');

    var cols = $('#add-columns-number').val();
    $('#main-grid').attr('data-columns', cols);
    if ($('input[name=add-columns-gutter]:checked').val() === 'yes') {
      $('#main-grid').addClass('tef-gutter');
    }

    // build columns
    for (var i = 0; i < cols ; ++ i) {
      $('#main-grid').append('<div id=column-'+ (i+1) +'"><span>Column '+ (i+1) +'</span> </div>');
    }
  });

  // Select columns
  $('#main-grid').click(function(e) {
    $('#main-grid *').removeClass('active');
    if ($(e.target).attr('id')) {
      $(e.target).addClass('active');
    } else {
      $(e.target).closest('[id]').addClass('active');
    }
  });
});

