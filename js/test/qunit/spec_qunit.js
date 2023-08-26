/**
   Usage:
         QUnit [api](http://api.qunitjs.com/)
*/

var moduleName = "spec_qunit.js";

import $ from "jQuery"; //dependency for qunit
import wa from "wa"; // SUT

//debug only
function confirmjQueryLoaded() {
    try {//confirm if jQuery is loaded
         console.log('  jQuery version: ' + $.fn.jquery + ' loaded.');}
    catch(err) {
         console.log('  Were you expecting jQuery ...');
         console.log(err);
    }
}//end function confirmjQueryLoaded

var test01 = function (argument) {

    console.log("In module " + moduleName + " invoked function test01");
    console.log("  SUT: wa");
    console.dir(wa);
    confirmjQueryLoaded();
    console.log(`  QUnit  version: ${QUnit.version} loaded`);
    console.dir(QUnit);

    QUnit.module( "group a" );

    QUnit.test("wa.version returns: " + wa.version(), function( assert ) {
      assert.equal(wa.version(),'v1.0.0-alpha',"true");
    });

/*
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
*/

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


    QUnit.todo( "wa.fuzzyPicnic currently does nothing", function( assert ) {
        var result = wa.fuzzyPicnic();
        assert.equal( result, "Expecting advice about a picnic..." );
});

}; //end function Test01




// Run tests above when document is ready
$(document).ready(function(){
  console.log("In module " + moduleName + " DOMContentLoaded, Document ready for testing!");
     QUnit.config.autostart = false;
     test01(); // make the specs available
     QUnit.start();
});

//export default test01;