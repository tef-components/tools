$(function() {

  // Launch modal on load
  $('#add-columns-modal').addClass('show');

  // create main layout
  $('#add-columns-btn').click(function() {
    $('#add-columns-modal').removeClass('show');

    var cols = $('#add-columns-number').val();
    $('#main-content').append('<labe id="main-grid-lbl"></labe><div id="main-grid"></div>');
    $('#main-grid').attr('columns', cols);
    if ($('input[name=add-columns-gutter]:checked').val() === 'yes') {
      $('#main-grid').addClass('tef-gutter');
    }

    // build columns
    for (var i = 0; i < cols ; ++ i) {
      $('#main-grid').append('<div id="column-'+ (i+1) +'"><span>&lt;div&gt;</span></div>');
    }
    $('#main-grid-lbl').text('<div columns="'+ i +'">');
    
    // Select columns
    $('#main-grid').click(function(e) {
      $('#main-grid').removeClass('active').find('.active').removeClass('active');
      if ($(e.target).attr('id')) {
        $(e.target).addClass('active');
      } else {
        $(e.target).closest('[id]').addClass('active');
      }

      // enable actions
      $('#add-nested-columns').removeAttr('disabled');
      $('#remove-column').removeAttr('disabled');
    });

    // Remove column
    $('#remove-column').click(function(e) {
      if($('#main-grid').hasClass('active') == true) {
        $('#main-grid').remove();
        $('#main-grid-lbl').remove();
        $('#add-columns-modal').addClass('show');
      } else {
        $('#main-grid .active').remove();
      }
    });
  });
});
