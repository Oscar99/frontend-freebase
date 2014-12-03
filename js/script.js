  $(".buscar").submit(function(event) {
var service_url = 'https://www.googleapis.com/freebase/v1/search';
  var busqueda = $("input[ name=text]").val();
  $(".text").val ("") 
  $(".informacion").empty()
  var params = {
   
    'query': busqueda,
    'filter': '(all type:/music/artist)' ,
    'limit': 10,
    'indent': true
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    var conteo = 0
    $.each(response.result, function(i, result) {
      var resultados = {text:result['name']}.text
      conteo += 1
      var show = '<tr>'+'<td>' + conteo+ '<td>' +resultados+ '</tr>' + '</td>'

      $(".informacion").append(show);
    });
  });
event.preventDefault();

});

$('input[name="genre"]').change(function(){
var service_url = 'https://www.googleapis.com/freebase/v1/search';
  busqueda = $(".texto").val();
  $(".informacion").empty()
  var params = {
   
    'query': busqueda,
    'filter': '(all type:/music/genre)',
    'limit': 10,
    'indent': true
  };
  $.getJSON(service_url + '?callback=?', params, function(response) {
    var conteo = 0
    $.each(response.result, function(i, result) {
      var resultados = {text:result['name']}.text;
      var show2 =  '<input type="checkbox" name="filtro" value="0"> '+resultados+'<br>';

      $(".informacion").append(show2);
    });
  });
event.preventDefault();
});
  
