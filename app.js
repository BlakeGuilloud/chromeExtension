$(document).ready(function(){
  page.init()
});
var zipCode = 29403;
var page = {
  // var state = 'SC';
  // var city = 'Charleston';
  // url: "http://api.wunderground.com/api/154ffd2282f789ce/conditions/q/SC/Charleston.json"+ state + "/" + city + "",
  init: function(){
    page.events();
    page.styling();

  },
  styling: function(){
    $.ajax({
      url: "http://api.wunderground.com/api/154ffd2282f789ce/conditions/q/" + zipCode + ".json",
      method: 'GET',
      success: function(data){
        $('.weather').html(
        '<img src = "' + data.current_observation.icon_url + '">'
        + '<h2>' + 'The weather in '
        + data.current_observation.display_location.full
        + ':'
        + '</h2>'
        + '<h4>'
        + data.current_observation.observation_time
        + '</h4>'
        + '<div class="info">'
        + '<h6> Temperature: '
        + data.current_observation.temp_f
        + ' F</h6>'
        + '<h6> Heat index: '
        + data.current_observation.heat_index_f
        + ' F</h6>'
        + '<h6> Humidity: '
        + data.current_observation.relative_humidity
        + '</h6>'
        + '<h6> Wind: '
        + data.current_observation.wind_string
        + '</h6>'
        + '</div>'
      )
      }
    });

  },


  events: function(){
    $('.location').on('submit', function(event){
      event.preventDefault();

      zipCode = $(".text").val();
      page.styling();
      });
  }
  // url: "http://api.wunderground.com/api/154ffd2282f789ce/conditions/q/"+location+".json",

}
//
//
// success: function(data){
//   var redditData = data.data.children
//   console.log(redditData[0].data.author)
//   _.each(redditData, function(currVal, idx){
//     $('.reddits').append('<h3>' + redditData[idx].data.title + '</h3>' + '<img src = " ' + redditData[idx].data.thumbnail + '">' + '<br>' + redditData[idx].data.author + '<br>')
//   });
// }
// });
