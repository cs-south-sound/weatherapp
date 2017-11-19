/**
 * Usage:
 *      wa.version(); //returns version of this app
 *      wa.init();
 */
console.log("In module weatherapp.js");

/** Dependencies to import at top level */
import $ from "jQuery";    //add allowed by stealjs?
import round10 from "round_ten"; //add allowed by stealjs
//import bootstrap from "bootstrap"; // this crashesq

//import isset   from "phpjs";     //add allowed by stealjs?

console.log("  $.fn.jquery: " + $.fn.jquery );





var debugLevel = 1; // 0 no Qunit testing
                    // 1 yes Qunit testing

//var wa = wa || {};// create weatherapp object if not already created
                  // under what condition would there be 'wa' already created?
var wa = {};
wa = (function ($) {
    "use strict";

    var version = function Version() {
        return "v1.0.0-alpha";
    };

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

        _userLocation,

        getUsersPosition = function GetUsersPosition() {
            if (navigator.geolocation) { // Check if GEO Location is avail.
                console.log("In function getUsersPosition");
                navigator.geolocation.getCurrentPosition( _setUserLocation );
            } else {
                //"Geolocation is not supported by this browser.";
            }
         },

         _setUserLocation = function SetUsersLocation(cp) {
             //expecting current position from navigotor.geolocation
              console.log("in function _setUsersLocation");
             if(cp !== undefined){
                 _userLocation = Object.create(cp.coords);// create a copy
                 console.dir( _userLocation.__proto__);
                 //console.log(_userLocation.__proto__.latitude);
                 //console.log(_userLocation.__proto__.longitude);
             }else{
                 console.log("currentPosition is undefined");
             }
         },


        convert = {
            KtoF: function (n) {
                var dp = decimalPlaces(n);
                return Math.round10((n - 273.15) * 1.8 + 32, -dp);
            },

            KtoC: function (n) {
                var dp = decimalPlaces(n);
                return Math.round10(n - 273.15, -dp);
            },

            CtoK: function (n) {
                var dp = decimalPlaces(n);
                n = Number(n);
                return Math.round10(n + 273.15, -dp);
            },

            CtoF: function (n) {
                var dp = decimalPlaces(n);
                return Math.round10(n * 1.8 + 32, -dp);
            },

            FtoK: function (n) {
                var dp = decimalPlaces(n);
                n = Number(n);
                return Math.round10((n + 459.67) * 5 / 9, -dp);
            },

            FtoC: function (n) {
                var dp = decimalPlaces(n);
                return Math.round10((n - 32) * 5 / 9, -dp);
            }
        },

        decimalPlaces = function (num) {
              //http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
              var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              if (!match) { return 0; }
              return Math.max(
                   0,
                   // Number of digits right of decimal point.
                   (match[1] ? match[1].length : 0)
                   // Adjust for scientific notation.
                   - (match[2] ? +match[2] : 0));
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

        init = function ($) {
            console.log("    In function init");

            var wtag = $('.weather');
            var debug = $('.debug');
            var uri;
            var latlon;// latitude+longitude for the url
            console.log("    In function init calling getUsersPosition");
            getUsersPosition();

            if(_userLocation !== undefined ){//location is available
                 console.log(_userLocation.__proto__.latitude);
                 console.log(_userLocation.__proto__.longitude);
                 latlon = "lat="+_userLocation.__proto__.latitude+"&lon="+_userLocation.__proto__.longitude;
                 console.log("latlon: "+ latlon);
                 uri = "//api.openweathermap.org/data/2.5/weather?" + latlon + "&APPID=" + wa.getApiKey();
            }else{
                 console.log("Location is not available")
                 uri = "https://api.openweathermap.org/data/2.5/weather?q=tacoma,US&APPID=" + wa.getApiKey();
            }

            /* be nice during debugging other scripts, do not access open weathermap.org too often*/
            $.getJSON(uri, function (wdata) {
                console.log("$.getJSON returned data: ");//debug only
                console.log(JSON.stringify(wdata));//debug only
                //debug.text(JSON.stringify(wdata));//debug only response into web page
                var description = wdata.weather[0].description;
                var temp = wdata.main.temp;
                var locationName = wdata.name;
                wtag.html(' Openweathermap.org conditions in ' + locationName + ' are:<br> ' + description + ', temperature is <span id="displayed_temperature">' + wa.convert.KtoF(temp) + '</span><span id="temperature_units"> Fahrenheit.</span>');
            });
        };

    return {
        version: version,
        setApiKey: setApiKey,
        getApiKey: getApiKey,
        getUsersPosition: getUsersPosition,
        init: init,
        convert: convert,
        fuzzyPicnic: fuzzyPicnic
    };

}());


/*

document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    console.log("DOMContentLoaded detected in weatherapp.js")
    wa.init();
}, false);

*/

// helper
/* */
function extend(destination, source) {
  for (var property in source) destination[property] = source[property];
  return destination;
}



steal.done().then(function(){
  console.log("  In function steal.done");
  //extend(window, bootstrap);// add indivual functions to window

  wa.init($); // with jquery get location, data, etc onto page
});

export default wa;