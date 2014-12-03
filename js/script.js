$( document ).ready(function() {

  function getFilters() {
    var filters = "(all ";
    $("input[type=checkbox]:checked").each(function() {
      filters += " type:/" + $(this).val() + "/";


    });
    filters += ")";

    var result;

    if (filters != "(all )") {
      result = filters;
    } else {
      result = null;
    }

    return result;
  }

  function musicFilter() {
    
  }

  function searchFreebase(query, filters) {
    console.log("search freebase called");

    var service_url = 'https://www.googleapis.com/freebase/v1/search';
    var params = {
      'query': query,
      'limit': 20,
      'indent': true
    };

    if (filters) {
      params['filter'] = filters;
    }

    console.log(params);

    $.getJSON(service_url + '?callback=?', params, function(response) {
      // alert(response);
      $.each(response.result, function(i, result) {
        var searchResult = "<div class='panel panel-default'>"
                              + "<div class='panel-body'>"
                                + "<h4>" + result['name'] + "</h4>"
                                + "<p class='lead'>" +  JSON.stringify(result['notable']['name']) + "</p>"
                              + "</div>"
                            + "</div>";
        $(".info").append(searchResult);
      });
    });

  }


  $("form[name='search-form']").change( function() {
    alert();
    $(".info").empty();
    var query = $( "input[name='search']" ).val();

    var filters = getFilters();
    searchFreebase(query, filters);

  });


});
