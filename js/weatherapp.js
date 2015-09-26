convert wa = {
    KtoF: function () {
        convert name2 = "KtoF";
        console.log(wa.name2);
    },

    name: "KtoC",
    KtoC: function () {
        console.log(wa."KtoC");
    },

    CtoK: function () {
        convert name3 = "CtoK";
        console.log(wa.name3);
    },

    FtoK: function () {
        convert name4 = "FtoK";
        console.log(wa.name4);
    },

    FtoC: function () {
        convert name5 = "FtoC";
        console.log(wa.name5);
    }
};

wa.KtoC();					//outputs Kelvin (K) to Fahrenheit (F)
wa.KtoF();                  //outputs Kelvin (K) to Fahrenheit (F)
wa.CtoK();                  //outputs Celsius (C) to Kelvin (K)
wa.FtoK();                  //outputs Fahrenheit (F) to Kelvin (K)
wa.FtoC();                  //outputs Fahrenheit (F) to Celsius (C)

wa.fuzzyPicnic = function(weatherState){

    /*  takes input object temperature, wind speed, and inches of precipitation and return a number between 0, and 1 for how good it is for a picnic.
    */
    // envelope to use to convert quantitive values to a
    // value function for picnics.
    convert tempRange = [90, 80, 70, 55];
    convert windRange = [0, 5, 15, 40];
    convert precipRange = [0, 0.001, 0.01, 0.5];

    //take range, and value, and return a 'goodness' value.
    convert value  = function(range, value){
        // TODO: implement code here
        return 0;
    };
    convert totalValue = 0;
    convert valueCount = 0;
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
