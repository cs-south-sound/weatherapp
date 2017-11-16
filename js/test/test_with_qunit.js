/**
   Usage:
     import test01 from "test01";
     test01();
*/

/** **** Software Under Test **** */
import wa from "wa"; // weatherapp SUT
import isset from "phpjs"; // SUT
/** **** End Software Under Test **** */

//Dependencies
import $     from "jQuery";
import QUnit from "qunit";

//var QUnit = require("steal-qunit");


//debug only
function confirmjQueryLoaded() {
    try {//confirm if jQuery is loaded
         console.log('jQuery version: ' + $.fn.jquery + ' loaded.');}
    catch(err) {
         console.log('Were you expecting jQuery ...');
         console.log(err);
    }
}//end function confirmjQueryLoaded

var test01 = function (argument) {

    console.log("In module test.js invoked test01");
    console.log("SUT: wa");
    console.dir(wa);
    confirmjQueryLoaded();
    console.log(`QUnit  version: ${QUnit.version} loaded`);
    console.dir(QUnit);

    QUnit.module( "group a" );
    QUnit.test( "hello test", function( assert ) {
        console.log("in test.js running hello test");
        assert.ok( 1 == "1", "Passed!" );
    });

    QUnit.test("wa.version returns alpha-0.0.2", function( assert ) {
      assert.equal(wa.version(),'alpha-0.0.2',"true");
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

}; //end function Test01




// Run tests above when document is ready
$(document).ready(function(){
  console.log("In module test.js Document ready for testing!");
 //console.log("Commenting out test01");
  test01();
});

//export default test01;