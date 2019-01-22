import $ from 'jquery';

function show(data) {
    return "<h4 class=datainf style='color:#5e6e88; font-weight: bold; width:135%;'>Current Weather for " + data.name + ", " +
        data.sys.country + "</h4>" +
        "<p><strong>Weather</strong>: " + data.weather[0].main + '<span style="text-align:left; "width=150px"; "height=150px";><img src="https://openweathermap.org/img/w/' + data.weather[0].icon + '.png"></span>' + "</p>" +
        "<p><strong>Description</strong>: " + data.weather[0].description + "</p>" +
        "<p><strong>Temperature</strong>: " + Math.round(data.main.temp).toFixed(0) + `&#8451;` + "</p>" +
        "<p><strong>Pressure</strong>: " + Math.round(data.main.pressure).toFixed(0) + " mbar" + "</p>" +
        "<p><strong>Humidity</strong>: " + data.main.humidity + "%</p>";
}


export function handleInput(e) {
    if (e.target.type === 'text' && e.keyCode !== 13) {
        return;
    }

    var city = $('#city').val();

    if (city !== '') {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +
                "&APPID=bd225df402c1f3cdd18ada3af0d2454c",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                var widget = show(data);

                $("#show").html(widget);
                $('#city').val('');
                $('#show').css('visibility', 'visible')
            }
        });
    }
}