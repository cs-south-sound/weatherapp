/* global jasmine steal expect */

/** Jasmine specifications */
console.log("In module spec_jasmine.js");


/** Dependencies*/
import $ from "jQuery";  //add allowed by stealjs?
console.log("  jquery version: "+$.fn.jquery);

/** **** Software Under Test **** */
//import isset from "phpjs"; // SUT
//import round10 from "round_ten";
import wa from "wa"; // weatherapp SUT
/** **** End Software Under Test **** */

console.log("  wa:");
console.dir(wa);
/*
console.log("  jasmine.version: " + jasmine.version);
console.log("  jasmine:");
console.dir(jasmine);
*/
console.log("  window:");
console.dir(window);


/** Specifications */
function test02() {

  describe("Suite test02 on the weatherapp (wa) methods and properties", function() {

    it("wa.version returns: " + wa.version(), function() {
      expect( wa.version() ).toMatch("v1.0.0-alpha");
    });

    it("convert Kelvin to Fahrenheit", function() {
      expect(wa.convert.KtoF('1.00')).toEqual(-457.87);
    });

    it("convert Kelvin to Celsius", function() {
      expect(wa.convert.KtoC('1.00')).toEqual(-272.15);
    });

    it("convert Celsius to Fahrenheit", function() {
      expect(wa.convert.CtoF('1.00')).toEqual(33.8);
    });

    it("convert Celsius to Kelvin", function() {
      expect(wa.convert.CtoK('1.00')).toEqual(274.15);
    });

    it("convert Fahrenheit to Kelvin", function() {
      expect(wa.convert.FtoK('1.00')).toEqual(255.93);
    });

    it("convert Fahrenheit to Celsius", function() {
      expect(wa.convert.FtoC('1.00')).toEqual(-17.22);
    });

    it("convert Fahrenheit to Celsius with decimal number", function() {
      expect(wa.convert.FtoC('1.1')).toEqual(-17.2);
    });

    it("check significant figure rounding convert.FtoC(32.0) should return 0.0", function() {
      expect(wa.convert.FtoC('32.0')).toEqual(0.0);
    });

    it("check significant figure rounding convert.FtoC(32.1) should return 0.1", function() {
      expect(wa.convert.FtoC('32.1')).toEqual(0.1);
    });

    it("check significant figure rounding convert.FtoC(32.10) should return 0.06", function() {
      expect(wa.convert.FtoC('32.10')).toEqual(0.06);
    });

    it("check significant figure rounding convert.FtoC(32.100) should return 0.056", function() {
      expect(wa.convert.FtoC('32.100')).toEqual(0.056);
    });

    it("check significant figure rounding convert.CtoF('0.1') should return 32.2", function() {
      expect(wa.convert.CtoF('0.1')).toEqual(32.2);
    });

    it("check significant figure rounding convert.CtoF('0.06') should return 32.11", function() {
      expect(wa.convert.CtoF('0.06')).toEqual(32.11);
    });

    it("check significant figure rounding convert.CtoF('0.056') should return 32.101", function() {
      expect(wa.convert.CtoF('0.056')).toEqual(32.101);
    });

    it("check significant figure rounding convert.CtoF('0.0556') should return 32.1001", function() {
      expect(wa.convert.CtoF('0.0556')).toEqual(32.1001);
    });

    it("wa.fuzzyPicnic currently does nothing", function() {
      expect(true).toBe(true);
      pending('TODO :)');
    });

  });//end describe a suite


}//end test02


export default test02;
