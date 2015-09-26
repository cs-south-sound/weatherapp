var convert = {
    KtoF: function (n) {
        return Math.round(n * (9/5)-459.67,-1);
    },

    KtoC: function (n) {
        return Math.round(n + 273.15,-1);
    },

    CtoK: function (n) {
        return Math.round(n - 273.15,-1)
    },

    CtoF: function (n) {
        return Math.round(n * (9/5)+32,-1);
    },

    FtoK: function (n) {
        return Math.round((n + 459.67) * 5/9,-1);
    },

    FtoC: function (n) {
        return Math.round((n - 32) * 5/9,-1);
    }
};

convert.fuzzyPicnic = function(weatherState){

    /*  takes input object temperature, wind speed, and inches of precipitation and return a number between 0, and 1 for how good it is for a picnic.
    */
    // envelope to use to var quantitive values to a
    // value function for picnics.
    var tempRange = [90, 80, 70, 55];
    var windRange = [0, 5, 15, 40];
    var precipRange = [0, 0.001, 0.01, 0.5];

    //take range, and value, and return a 'goodness' value.
    var value  = function(range, value){
        // TODO: implement code here
        return 0;
    };
    var totalValue = 0;
    var valueCount = 0;
    if(isset(weatherState.tempF)){

    totalValue += value(tempRange,weatherState.tempF);
    }
    if(isset(weatherState.windMPH)){
        valueCount +=1;
        totalValue += value(windRange);
    }
    if(isset(weatherState.precip)){
        totalValue += value();
        valueCount +=1;
    }

    if (valueCount!==0){
        return totalValue / valueCount;
    }else{
        //we recieved no valid input in the weatherState object.
        if(isset(console) && isset(console.log)){ console.log("note:no picnic input"); }
    return 0;}

};
