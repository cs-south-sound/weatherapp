//(function () {
//  "use strict";
import QUnit from "qunit";
import wa from "wa";
import isset from "phpjs";

console.dir(wa);  

var test01 = function (argument) {
console.log("running test scripts in test.js");

QUnit.test("wa.version returns alpha-0.0.2", function( assert ) {
  assert.equal(wa.version(),'alpha-0.0.2');
});
//QUnit.test( "Debug level is set to '1'", function( assert ) {
//  assert.ok( debugLevel == 1, "Passed!" );
//});
QUnit.test( "module ISSET installed", function( assert ) {
    // confirm both undefined and defined conditions
    // are tested by ISSET
    var notset = undefined;
    var result1 = isset(notset);//false
    var set=1;
    var result2 = isset(set);//true
    //expect  true = !false && true
    var result = (!result1 && result2);
  assert.ok( result, "Passed!" );
});
QUnit.test("convert Kelvin to Fahrenheit", function(assert) {
  assert.equal(wa.convert.KtoF('1.00'),-457.87);
});
QUnit.test("convert Kelvin to Celsius", function(assert) {
  assert.equal(wa.convert.KtoC('1.00'),-272.15);
});
QUnit.test("convert Celsius to Fahrenheit", function(assert) {
  assert.equal(wa.convert.CtoF('1.00'),33.8);
});
QUnit.test("convert Celsius to Kelvin", function(assert) {
  assert.equal(wa.convert.CtoK('1.00'),274.15);
});
QUnit.test("convert Fahrenheit to Kelvin", function(assert) {
  assert.equal(wa.convert.FtoK('1.00'),255.93);
});
QUnit.test("convert Fahrenheit to Celsius", function(assert) {
  assert.equal(wa.convert.FtoC('1.00'),-17.22);
});

QUnit.test("convert Fahrenheit to Celsius with decimal number", function(assert) {
  assert.equal(wa.convert.FtoC(1.1),-17.2);
});


QUnit.test("wa.fuzzyPicnic currently does nothing, TODO :)", function(assert) {
    assert.equal(1===1,true);
});
  
}//end function Test01

export default test01;