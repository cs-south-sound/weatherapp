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

console.log("  jasmine.version: " + jasmine.version);
console.log("  jasmine:");
console.dir(jasmine);
console.log("  window:");
console.dir(window);


/** Specifications */  
function test02() {
  console.log("  In function test02.");

  describe("A suite in test02 is just a function", function() {
    console.log("    In describe a suite test02.");

    it("and so is a spec", function() {
      var a = true;
      expect(a).toBe(true);
    });

  });//end describe a suite

  
}//end test02


steal.done().then(function(){
  //test02(); //run the above test specifications
});

/*maybe try creating a index.js file and import everything with that ?*/
export default test02;
//export { test02 };
