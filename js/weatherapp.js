var debugLevel = 1; // 0 no Qunit testing
                    // 1 yes Qunit testing

var wa = {};

wa.convert = {
    KtoF: function (n) {
        return Math.round10((n-273.15)*1.8+32,-2);
    },

    KtoC: function (n) {
        return Math.round10(n - 273.15,-2);
    },

    CtoK: function (n) {
        return Math.round10(n + 273.15,-2);
    },

    CtoF: function (n) {
        return Math.round10(n * (9/5)+32,-2);
    },

    FtoK: function (n) {
        return Math.round10((n + 459.67) * 5/9,-2);
    },

    FtoC: function (n) {
        return Math.round10((n - 32) * 5/9,-2);
    }
};

wa.fuzzyPicnic = function(weatherState) {
    if (!weatherState) throw Error("Must pass weatherstate object");
    /*  takes input object temperature, wind speed, and inches of precipitation and return a number between 0, and 1 for how good it is for a picnic.
    */
    // envelope to use to var quantitive values to a
    // value function for picnics.
    var tempRange = [90, 80, 70, 55];
    var windRange = [0, 5, 15, 40];
    var precipRange = [0, 0.001, 0.01, 0.5];

    //take range, and value, and return a 'goodness' value.
    function goodness(range, value){
        // TODO: implement code here
        return 0;
    }
    var totalValue = 0;
    var valueCount = 0;
    if(isset(weatherState.tempF)){

    totalValue += goodness(tempRange, weatherState.tempF);
    }
    if(isset(weatherState.windMPH)){
        valueCount +=1;
        totalValue += value(windRange);
        totalValue += goodness(windRange, weatherState.windMPH);
    }
    if(isset(weatherState.precip)){
        totalValue += goodness(precipRange, weatherState.precip);
        valueCount +=1;
    }

    if (valueCount!==0){
        return totalValue / valueCount;
    }else{
        //we recieved no valid input in the weatherState object.
        if(isset(console) && isset(console.log)){ console.log("note:no picnic input"); }
    return 0;}

};