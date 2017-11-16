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

    it("wa.version returns alpha-0.0.2", function() {
      expect( wa.version() ).toMatch("alpha-0.0.2");
    });
/*
    it("convert Kelvin to Fahrenheit", function() {
      expect(wa.convert.KtoF('1.00')).toBe("-457.87");
    });

    it("convert Kelvin to Celsius", function() {
      expect( wa.convertKtoC('1.00') ).toBe("-272.15");
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
