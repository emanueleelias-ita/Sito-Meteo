function getWeather () {
$('.weatherResponse').html('');
var cityName = $('#cityName').val();
var apiCall=
'http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
'&appid=02b664040367b84ac7ae1334618923fd'
;
$.getJSON(apiCall, weatherCallback);
function weatherCallback(weatherData) {
  var cityName = weatherData.name;
  var country = weatherData.sys.country;
  var temp=
  weatherData.main.temp;
  temp = parseInt(temp) - 273;
  var description=
  weatherData.weather[0].description;
  var iconcode=
  weatherData.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
  $('.weatherResponse').append("The weather in " + cityName + " " + country + " is currently " + description + " and " + temp + "°");
  document.getElementById('wicon').style.display='inline';
    $('#wicon').attr('src', iconurl);
}
}
function GeoFind () {
  var out = document.getElementById("out");
  if (!navigator.geolocation) {
    out.innerHTML = "<p> Geolocation is not supported in your browser </p>";
    return;
  }
  var geo_options = {
    enableHeightAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  }
  function geo_success(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $('.weatherResponse').html('');
    var cityName = $('#cityName').val();
    var apiCall=
    'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon +
    '&appid=02b664040367b84ac7ae1334618923fd'
    ;
    $.getJSON(apiCall, weatherCallback);
    function weatherCallback(weatherData) {
      var lat = weatherData.lat;
      var lon = weatherData.lon;
      var temp=
      weatherData.main.temp;
      temp = parseInt(temp) - 273;
      var description=
      weatherData.weather[0].description;
      var iconcode=
      weatherData.weather[0].icon;
      var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
      $('.weatherResponse').append("The weather in your current location is currently " + description + " and " + temp + "°");
      document.getElementById('wicon').style.display='inline';
        $('#wicon').attr('src', iconurl);
    }
  }
  function geo_error () {
    out.innerHTML = "Unable to retrieve your location!";
  }
  out.innerHTML = "<p> Locating... </p>";
  navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
}
