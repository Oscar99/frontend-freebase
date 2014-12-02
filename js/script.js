$( document ).ready(function() {

  var service_url = 'https://www.googleapis.com/freebase/v1/search';

  $("#search-button").click( function() {
    var query = $( "input[name='search']" ).val();
    alert(query);

    var params = {
      'query': query,
      'filter': '(all type:/music/artist )',
      'limit': 10,
      'indent': true
    };

    $.getJSON(service_url + '?callback=?', params, function(response) {
      alert(response);
      $.each(response.result, function(i, result) {
        $('<div>',{text:result['name']}, '</div>').appendTo(".informacion");
      });
    });
  });

});
