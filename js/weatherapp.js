"use strict";

var wa = {} || wa;

wa = (function ($) {

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

        ktoF = function (tempk) {
            return Math.round((tempk - 273.15) * 1.8000 + 32.00, -1);
        },

        ktoC = function () {
            console.log("KtoC");
        },

        ctoK = function () {
            console.log("CtoK");
        },

        ftoK = function () {
            console.log("FtoK");
        },

        ftoC = function () {
            console.log("FtoC");
        },

        fuzzyPicnic = function (weatherState) {

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
        
        init = function() {
            var wtag = $('.weather');
            var debug = $('.debug');
            var uri = "http://api.openweathermap.org/data/2.5/weather?q=tacoma,US&APPID=" + wa.getApiKey();
            /* be nice during debugging other scripts, do not access open weathermap.org too often*/
            $.getJSON(uri, function (wdata) {
                //console.log("returned data: ");//debug only
                //console.log(JSON.stringify(wdata));//debug only
                //debug.text(JSON.stringify(wdata));//debug only response into web page
                var description = wdata['weather'][0]['main'];
                var temp = wdata['main']['temp'];
                var locationName = wdata['name'];
                wtag.html(' Openweathermap.org conditions in ' + locationName + ' are ' + description + ', temperature is <span id="displayed_temperature">' + ktoF(temp) + '</span><span id="temperature_units"> Fahrenheit.</span>');
            });
        };

    return {
        setApiKey: setApiKey,
        getApiKey: getApiKey,
        init: init,
        KtoF: ktoF,
        KtoC: ktoC,
        CtoK: ctoK,
        FtoK: ftoK,
        ftoC: ftoC,
        fuzzyPicnic: fuzzyPicnic
    }

})(jQuery);


document.addEventListener('DOMContentLoaded', function () {
   wa.init();
}, false);


//var ktof = function (tempk) { return Math.round((tempk - 273.15) * 1.8000 + 32.00, -1); };
//var wtag = $('.weather');
//var debug = $('.debug');
//var uri = "http://api.openweathermap.org/data/2.5/weather?q=tacoma,US&APPID=" + wa.getApiKey();
///* be nice during debugging other scripts, do not access open weathermap.org too often*/
//$.getJSON(uri, function (wdata) {
//    //console.log("returned data: ");//debug only
//    //console.log(JSON.stringify(wdata));//debug only
//    //debug.text(JSON.stringify(wdata));//debug only response into web page
//    var description = wdata['weather'][0]['main']
//    var temp = wdata['main']['temp']
//    var locationName = wdata['name']
//    wtag.html(' Openweathermap.org conditions in ' + locationName + ' are ' + description + ', temperature is <span id="displayed_temperature">' + ktof(temp) + '</span><span id="temperature_units"> Fahrenheit.</span>');
//});






//var wa = {
//    KtoF: function () {
//        var name2 = "KtoF";
//        console.log(wa.name2);
//    },

//    name: "KtoC",
//    KtoC: function () {
//        console.log(wa."KtoC");
//    },

//    CtoK: function () {
//        var name3 = "CtoK";
//        console.log(wa.name3);
//    },

//    FtoK: function () {
//        var name4 = "FtoK";
//        console.log(wa.name4);
//    },

//    FtoC: function () {
//        var name5 = "FtoC";
//        console.log(wa.name5);
//    }
//};

//wa.KtoC();					//outputs Kelvin (K) to Fahrenheit (F)
//wa.KtoF();                  //outputs Kelvin (K) to Fahrenheit (F)
//wa.CtoK();                  //outputs Celsius (C) to Kelvin (K)
//wa.FtoK();                  //outputs Fahrenheit (F) to Kelvin (K)
//wa.FtoC();                  //outputs Fahrenheit (F) to Celsius (C)

//wa.fuzzyPicnic = function(weatherState){

//    /*  takes input object temperature, wind speed, and inches of precipitation and return a number between 0, and 1 for how good it is for a picnic.
//    */
//    // envelope to use to convert quantitive values to a 
//    // value function for picnics.
//    var tempRange = [90, 80, 70, 55];
//    var windRange = [0, 5, 15, 40];
//    var precipRange = [0, 0.001, 0.01, 0.5];

//    //take range, and value, and return a 'goodness' value.
//    var value  = function(range, value){
//        // TODO: implement code here
//        return 0;
//    };
//    var totalValue = 0;
//    var valueCount = 0;
//    if(isset(weatherState.tempF)){

//    totalValue += value(tempRange,weatherState.tempF);
//    }
//    if(isset(weatherState.windMPH)){
//        valueCount +=1;
//        totalValue += value(windRange); 
//    }
//    if(isset(weatherState.precip)){
//        totalValue += value();
//        valueCount +=1;
//    }

//    if (valueCount!==0){
//        return totalValue / valueCount;
//    }else{
//        //we recieved no valid input in the weatherState object.
//        if(isset(console) && isset(console.log)){ console.log("note:no picnic input"); }
//    return 0;}

//};

