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

    it("Hello world is true", function() {
      var helloWorld = true;
      expect(helloWorld).toBe(true);
    });

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

    it("wa.fuzzyPicnic currently does nothing", function() {
      expect(true).toBe(true);
      pending('TODO :)');
    });


/*
    QUnit.test("wa.fuzzyPicnic currently does nothing, TODO :)", function(assert) {
        assert.equal(1===1,true);
    });
 */

  });//end describe a suite


}//end test02


steal.done().then(function(){
  //test02(); //run the above test specifications
});

/*maybe try creating a index.js file and import everything with that ?*/
export default test02;
//export { test02 };
