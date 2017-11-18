/** load_SUT_and_qunit.js */
console.log( "In module load_SUT_and_qunit.js" );

// Test framework
import $ from "jQuery";
import QUnit from "qunit"; 
console.log("  qunit.version: " + QUnit.version);


/** **** Software Under Test **** */
import wa from "wa"; // weatherapp SUT
console.log("  wa.version(): " + wa.version());
import specs_qunit from "specs_qunit"
/** **** End Software Under Test **** */