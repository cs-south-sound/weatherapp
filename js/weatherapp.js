var debugLevel = 1; // 0 no Qunit testing
                    // 1 yes Qunit testing

//var wa = wa || {};// create weatherapp object if not already created
                  // under what condition would there be 'wa' already created?
var wa = {};
wa = (function ($) {
    "use strict";

    var _apiKey = null,

        setApiKey = function (apiKey) {
            _apiKey = apiKey;
            localStorage.setItem("apiKey", apiKey);
        },

        getApiKey = function () {

            if (_apiKey === null) {
                setApiKey(localStorage.getItem("apiKey"));
            }

            if (_apiKey === null) {
                setApiKey(prompt("Please enter in the Openweathermap.org API Key"));
            }
            return _apiKey;
        },

        convert = {
            KtoF: function (n) {
                return Math.round10((n - 273.15) * 1.8 + 32, -2);
            },

            KtoC: function (n) {
                return Math.round10(n - 273.15, -2);
            },

            CtoK: function (n) {
                return Math.round10(n + 273.15, -2);
            },

            CtoF: function (n) {
                return Math.round10(n * 1.8 + 32, -2);
            },

            FtoK: function (n) {
                return Math.round10((n + 459.67) * 5 / 9, -2);
            },

            FtoC: function (n) {
                return Math.round10((n - 32) * 5 / 9, -2);
            }
        },

        fuzzyPicnic = function (weatherState) {
            if (!weatherState) {
                throw "Error( Must pass weatherstate object)";
            }
            /*  takes input object temperature, wind speed, and inches of precipitation and return a number between 0, and 1 for how good it is for a picnic.
            */
            // envelope to use to convert quantitive values to a
            // value function for picnics.
            var tempRange = [90, 80, 70, 55];
            var windRange = [0, 5, 15, 40];
            var precipRange = [0, 0.001, 0.01, 0.5];

            //take range, and value, and return a 'goodness' value.
            var value = function (range, value) {
                // TODO: implement code here
                return 0;
            };
            var totalValue = 0;
            var valueCount = 0;
            if (isset(weatherState.tempF)) {

                totalValue += value(tempRange, weatherState.tempF);
            }
            if (isset(weatherState.windMPH)) {
                valueCount += 1;
                totalValue += value(windRange);
            }
            if (isset(weatherState.precip)) {
                totalValue += value();
                valueCount += 1;
            }

            if (valueCount !== 0) {
                return totalValue / valueCount;
            } else {
                //we recieved no valid input in the weatherState object.
                if (isset(console) && isset(console.log)) {
                    console.log("note:no picnic input");
                }
                return 0;
            }
        },

        init = function () {
            var wtag = $('.weather');
            var debug = $('.debug');
            var uri = "http://api.openweathermap.org/data/2.5/weather?q=tacoma,US&APPID=" + wa.getApiKey();
            /* be nice during debugging other scripts, do not access open weathermap.org too often*/
            $.getJSON(uri, function (wdata) {
                //console.log("returned data: ");//debug only
                //console.log(JSON.stringify(wdata));//debug only
                //debug.text(JSON.stringify(wdata));//debug only response into web page
                var description = wdata.weather[0].description;
                var temp = wdata.main.temp;
                var locationName = wdata.name;
                wtag.html(' Openweathermap.org conditions in ' + locationName + ' are:<br> ' + description + ', temperature is <span id="displayed_temperature">' + wa.convert.KtoF(temp) + '</span><span id="temperature_units"> Fahrenheit.</span>');
            });
        };

    return {
        setApiKey: setApiKey,
        getApiKey: getApiKey,
        init: init,
        convert: convert,
        fuzzyPicnic: fuzzyPicnic
    };

}(jQuery));


document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    wa.init();
}, false);