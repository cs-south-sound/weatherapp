/** file: load_SUT_and_jasmine.js*/

console.log("In module load_SUT_and_jasmine.js");

/** Dependencies configured by stealjs file /js/config.js  */

//import jasmineHtml from "jasmineHtml"; //cannot import because no export in file?
//import jasmineBoot from "jasmineBoot";
//import __ from "";

if(jasmineRequire){
    console.log("  jasmineRequire is available");
    //console.log(jasmineRequire);
}



console.log("  jasmineRequire.HtmlReporter");
console.dir(jasmineRequire.HtmlReporter);


//import specs from "specs";
import test02 from "specs";
console.log("  test02");
test02();


steal.done().then(function(){
  console.log(" steal.done");
  console.log(" window.onload() ");
  
  window.onload(); //causes jasmine boot.js to re-initialize and re-execute?
  /** also causes
  Uncaught TypeError:
  Cannot read property 'spies' of undefined
  Reference: https://github.com/jasmine/jasmine/issues/1231
  */
});
