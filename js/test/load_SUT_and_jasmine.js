/** file: load_SUT_and_jasmine.js
    top level entry point defined in test_weatherapp_jasmine.html
*/
console.log("In module load_SUT_and_jasmine.js");

var debugLevel = 3;// from 1 to 3 in 0.5 increments
var verbose = true; // true vvD.konsole on

/** Dependencies configured by stealjs file /js/config.js  */

import vvD from "vvD";//Vivid Ventures Debugger modal and konsole
if (debugLevel>=1){
   vvD.konsole( verbose,"vv" );
   vvD.konsole( verbose,"The vvD.konsole is available," + " debugLevel: "+ debugLevel );
   vvD.konsole( verbose,"Reference: github.com / NorthDecoder / jsDebugUtility/ vvD / js / vvD_module.js" );
}

// currently done with <script> tags in the html
//import jasmine from "jasmine";
//import jasmineHtml from "jasmineHtml"; //cannot import because no export in file?
import jasmineBoot from "jasmineBoot";


if (debugLevel>=1.5){
  if(jasmineRequire){
      console.log("  jasmineRequire is available");
      console.log(jasmineRequire);
      console.log("  jasmineRequire.HtmlReporter");
      console.dir(jasmineRequire.HtmlReporter);
  }else{
      console.log("  jasmineRequire NOT available");
  }
}





import test02 from "specs";


steal.done().then(function(){
  if (debugLevel>=2){
    console.log(" in steal.done");
    console.log(" jasmineBoot() ");
  }

  jasmineBoot();//run customized boot_jasmine as module

  if (debugLevel>=2.5){
    console.log("  test02");
  }

  test02();// run the specs

  if (debugLevel>=3){
    vvD.konsole( verbose," window.onload() " );
    vvD.konsole( verbose,"^^" );
  }

  window.onload(); // initialize and execute in custom_jasmine_boot.js
});
