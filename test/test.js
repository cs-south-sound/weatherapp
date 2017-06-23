test("wa.version returns alpha-0.0.1", function() {
  equal(wa.version(),'alpha-0.0.1');
});
test( "Debug level is set to '1'", function( assert ) {
  assert.ok( debugLevel == 1, "Passed!" );
});
test( "module ISSET installed", function( assert ) {
    // confirm both undefined and defined conditions
    // are tested by ISSET
    var notset = undefined;
    result1 = isset(notset);//false
    var set=1;
    result2 = isset(set);//true
    //expect  true = !false && true
    var result = (!result1 && result2);
  assert.ok( result, "Passed!" );
});
test("convert Kelvin to Fahrenheit", function() {
  equal(wa.convert.KtoF('1.00'),-457.87);
});
test("convert Kelvin to Celsius", function() {
  equal(wa.convert.KtoC('1.00'),-272.15);
});
test("convert Celsius to Fahrenheit", function() {
  equal(wa.convert.CtoF('1.00'),33.8);
});
test("convert Celsius to Kelvin", function() {
  equal(wa.convert.CtoK('1.00'),274.15);
});
test("convert Fahrenheit to Kelvin", function() {
  equal(wa.convert.FtoK('1.00'),255.93);
});
test("convert Fahrenheit to Celsius", function() {
  equal(wa.convert.FtoC('1.00'),-17.22);
});

test("convert Fahrenheit to Celsius with decimal number", function() {
  equal(wa.convert.FtoC(1.1),-17.2);
});


test("wa.fuzzyPicnic currently does nothing, TODO :)", function() {
    equal(1===1,true);
});