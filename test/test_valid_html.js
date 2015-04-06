/* Validate an HTML target document 
*******************************************************************************
   Description :
           This script will send the contents of the local web
           page under test in POST format as multipart/form-data
           to https://validator.nu following the API requirements.
					 OR
           Send the URL of a hosted web page in the GET format

           For example in the browsers URL field enter one of these:
            https://validator.nu/?doc=http%3A%2F%2Fvividventures.biz
              Expect the results of the validation in web page format
            https://validator.nu/?doc=http%3A%2F%2Fvividventures.biz&out=json
              Expect the results of the validation in json format

   By:     Joe Devlin at Vivid Ventures LLC  4/3/2015 1:55PM

   Copyright:
           GNU General Public License

           This program is free software: you can redistribute it and/or modify
           it under the terms of the GNU General Public License as published by
           the Free Software Foundation, either version 3 of the License, or
           (at your option) any later version.

           This program is distributed in the hope that it will be useful,
           but WITHOUT ANY WARRANTY; without even the implied warranty of
           MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
           GNU General Public License for more details.

           You should have received a copy of the GNU General Public License
           along with this program.  If not, see <http://www.gnu.org/licenses/>.

   Input  : The a)contents or b)web-url of the page under test
            The code figures out which it will be.

   Output : As a console.log message something like
            status = 'Ok: No detectable HTML5 errors in data tested at validator.nu'
                   = 'Error: Invalid HTML5 in data tested at validator.nu'
                   = 'Undefined: No testing was performed.'

            As an innerHTML insertion into the document under test

   Usage:
           Insert this script into the bottom of your web page, just above
           the body end tag. For example:
             <!--This is where the simple error message will be placed-->
             <p id="validation_log" style="background-color:DarkKhaki "></p>

             <!--Run the html validation test against the markup of current page-->
             <script src="test_valid_html.js"></script>
             </body></html><!--Ref only - obviously do not insert these end tags-->

   Requires :
           The following external files, functions need to be available
              The webservice at https://validator.nu

             (For some reason jQuery does not seem to do
              multipart/form-data with the validator.nu API
              which means this code is in native XMLHttpRequest
              NO jQuery!)

   Reference:
       - https://github.com/validator/validator/wiki
       - https://wiki.whatwg.org/wiki/Validator.nu_Web_Service_Interface

       - http://en.wikipedia.org/wiki/Query_string
       - http://en.wikipedia.org/wiki/URI_scheme
       - http://hayageek.com/jquery-ajax-post/  (remember jQuery not working)
       - https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
       - https://developer.mozilla.org/en-US/docs/Web/Guide/Using_FormData_Objects
       - https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started
*******************************************************************************
*/


/* ----------------------------------------------------------------------------
   User editable variable
     If you are working on the web page locally you can see how this script
     responds by uncommenting ONE of the 'samplehtmlpage' variables lines below.
     REMEMBER to recomment it to test your own page.  It is a little confusing,
     but note that the message for samplehtmlpage is returned into the page under
     test.
*/

  // basic template for a valid HTML5 document
    //var samplehtmlpage = '<!DOCTYPE html><html><head><title>Test</title></head><body><p></p></body></html>';//debug only

  // insert a failed tag below to see if validator detects error 'no end title tag'
    //var samplehtmlpage = '<!DOCTYPE html><html><head><title>Test<title></head><body><p></p></body></html>';//debug only
// ----------------------------------------------------------------------------




//Initialize some variables
    //the entire script is written around the API of validator.nu webservice
     var validate = 'https://validator.nu';
    //url of current window
     var windowurl = window.location.href;
    //get the prefix as an array, convert to a string
     //var schemeName = windowurl.split(':',1).join();
     var schemeName;
//End initialize





//=====================================================================
function confirmTermsConditions(){
	var termsConditions;
	termsConditions = 'I agree to not deploy the validation\n script in production.';
	termsConditions += '\n\nI have read and understand all of the';
	termsConditions += '\nterms and API information at \nhttps://about.validator.nu';
	termsConditions += '\nThe content of my webpage is about';
	termsConditions += '\n to be sent to a third party HTML\nvalidator.';

	if(window.confirm(termsConditions)){
		//get the prefix as an array, convert to a string
		return windowurl.split(':',1).join();//alert('Great. Thank you, proceed');
	}else{return undefined;//alert('Not confirmed');
	 }
	}
//=====================================================================




//=====================================================================
function displayMessages(vtr){//vtr is short for validation test results
    //in JSON format defined by validator.nu API
	  console.log('In function: displayMessages');//degug only
	  console.log("Inspect.properties(vtr): " + Inspect.properties(vtr));//debug only

    //how many messages in the JSON array?   last message has first error!
    //remember the zeroeth element!
    for (var i = vtr.messages.length-1; i > -1; i--) {
            console.log('i: '+i);
            console.log("vtr.messages[i].type: " +
                         vtr.messages[i].type);
            console.log("vtr.messages[i].message: " +
                         vtr.messages[i].message);
            console.log("vtr.messages[i].extract: " +
                         vtr.messages[i].extract);
    }
}//end function displayMessages
//=====================================================================




//=====================================================================
function getStatus(vtr){//vtr is short for validation test results
    //in JSON format defined by validator.nu API
    //how many messages in the JSON array?   last message has first error!
    var failuresFound = null;
    var msg;//return message
	  console.log('In function: getStatus');//degug only
    for (var i = vtr.messages.length-1; i > -1; i--) {
        if(vtr.messages[i].type==="error"){
            failuresFound = true;
        }
    }
    if (failuresFound===true){
         msg='Error: Script test_valid_html.js found invalid HTML5 in data tested at validator.nu,<br/> in the menu bar click on Tools->WebDeveloper->WebConsole->Console to see more detailed messages.';
    }else{
        //did not find any error messages assume no detected errors
         msg='Ok: Script test_valid_html.js found no detectable HTML5 errors in data tested at validator.nu';
    }
    //put id=validation_log in a tag in the web page under test to output the results
    document.getElementById("validation_log").innerHTML=msg;
    return msg;
}//end function displayMessages
//=====================================================================




//=====================================================================
function sendURLData(){
	  console.log('In function: sendURLData');//degug only

	  // If web page is served remotely by a web host then send the URL
	  // of the page under test to validator.nu via a GET request.
	  // validator.nu will aquire the page content, test it, and return
	  // a test result in JSON format

     //  https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

     // somewhat defined by the validator.nu API
     windowurl = encodeURIComponent(windowurl);//prepare for URL encoding
     var parameters = '?doc=' + windowurl;
         parameters += '&charset=UTF-8';
         parameters += '&parser=html5';
         parameters += '&laxtype=yes';
         parameters += '&out=json';


   //console.log("parameters: "+ parameters);//debug only
   validate += parameters;
   //console.log("validate: "+ validate);//debug only

   var oXHR = new XMLHttpRequest();
   oXHR.open("GET", validate,true);
   oXHR.overrideMimeType("text/html; charset=UTF-8");
   oXHR.send();

   oXHR.onreadystatechange = function(){
       if (oXHR.readyState===1){//OPENED
           console.log("<------- Opened communication at: " + validate +" in script: test_valid_html.js -------------->");//debug only
       }
       if (oXHR.readyState===2){//HEADERS_RECEIVED
           console.log("<------- Received AJAX headers from: " + validate +" in script: test_valid_html.js -------------->");//debug only
       }
       if (oXHR.readyState===4){//done
           console.log('oXHR.response: ' + oXHR.response);
           var validationTestResults = JSON.parse(oXHR.response);//requested a response in JSON format
           //console.log("Inspect.properties(validationTestResults): " + Inspect.properties(validationTestResults));
           // remember all the variables lose scope when leaving this function.
           // output data before the scope is lost, by placing into an html tag
           displayMessages(validationTestResults);
           var vtrStatus = getStatus(validationTestResults);
           console.log("HTML5 validation status: " + vtrStatus);// this is the message you want 
           console.log("<------- Ending AJAX call in script: test_valid_html.js -------------->");
       }
    };//end onreadystate change
}//end function sendURLData()
//=====================================================================



//=====================================================================
function sendFileData(){
	  console.log('In function: sendFileData');//degug only

	      // If it is a local file on *nix or windows
        // then POST the browsers rendition of the contents of
        // page under test, ie the page this script is part of.

        // Note the browser will 'fix' or correct some minor
        // broken html before rendering in the browser.

        // The 'currentPageMarkup' variable contains the fixed
        // version of the html which will (incorrectly) pass
        // some validator.nu tests.

        // Alternately post the page to be tested to your web site so
        // the URL of the html to be tested will be sent directly to
        // validate webservice in the http case statment.
        var mydoctype = new XMLSerializer().serializeToString(document.doctype);
        //console.log("mydoctype: " + mydoctype);//debug only

        var currentPageMarkup = document.documentElement.outerHTML;//get all the html
        currentPageMarkup = mydoctype + currentPageMarkup;//put them back together

        //console.log('!/undef/i.test(typeof samplehtmlpage):' + !/undef/i.test(typeof samplehtmlpage));//debug only
        if(!/undef/i.test(typeof samplehtmlpage)){//if samplepage is defined
           currentPageMarkup = samplehtmlpage;//switch current markup to a small sample page
        }
        //console.log("currentPageMarkup: " + currentPageMarkup);//debug only

        //get the validation results from the webservice validator.nu
        //console.log("validate: " + validate);//debug only
        //=================================================
        // Implement the https://validator.nu/ API
        // documented at:
        //    https://github.com/validator/validator/wiki/Service:-HTTP-interface
        //    deprecated  https://wiki.whatwg.org/wiki/Validator.nu_Web_Service_Interface

        //  https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
          var formData = new FormData();
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
          formData.append('charset','UTF-8');
          formData.append('out','json');
          formData.append('laxtype','yes');
          formData.append('parser','html5');

        //https://developer.mozilla.org/en-US/docs/Web/Guide/Using_FormData_Objects
          // JavaScript file-like object...
          var blob = new Blob([currentPageMarkup], { type: "text/html"});
          formData.append("content", blob);

          var oXHR = new XMLHttpRequest();
          oXHR.open("POST", validate);
          oXHR.send(formData);

          var validationTestResults = null;//expect response from validate webservice
          oXHR.onreadystatechange = function(){
              //the other readyState events 0..3 could be handled here too
              if (oXHR.readyState===1){//OPENED
                  console.log("<------- Opened communication at: " + validate +" in script: test_valid_html.js -------------->");//debug only
              }
              if (oXHR.readyState===2){//HEADERS_RECEIVED
                  console.log("<------- Received AJAX headers from: " + validate +" in script: test_valid_html.js -------------->");//debug only
              }
              if (oXHR.readyState===4){//done
                  console.log('oXHR.response: ' + oXHR.response);
                  validationTestResults = JSON.parse(oXHR.response);//requested a response in JSON format
                  //console.log("validationTestResults: " + validationTestResults);
                  //console.log("Inspect.properties(validationTestResults): " + Inspect.properties(validationTestResults));
                  displayMessages(validationTestResults);
                  var vtrStatus = getStatus(validationTestResults);
           //put id=validation_log in a tag in the web page under test to output the results because
                 // remember all the variables lose scope when leaving this function
           //document.getElementById("validation_log").innerHTML=vtrStatus;

                  console.log("HTML5 validation status: " + vtrStatus);// this is the message you want 
                  console.log("<------- Ending AJAX call in script: test_valid_html.js -------------->");//debug only
              }
          };//end onreadystate change
}
//=====================================================================





//=====================================================================
//http://codeinthehole.com/writing/inspecting-javascript-objects/
// This is here to help with debugging and just in case you want
// to see what is in some of the returned objects.
// Syntax:
//         Inspect.methods(object);
//         Inspect.properties(object);

var Inspect = {
    TYPE_FUNCTION: 'function',
    // Returns an array of (the names of) all methods
    methods: function(obj) {
        var testObj = obj || self;
        var methods = [];
        for (var prop in testObj) {
            if (typeof testObj[prop] == Inspect.TYPE_FUNCTION && typeof Inspect[prop] != Inspect.TYPE_FUNCTION) {
                methods.push(prop);
            }
        }
        return methods;
    },
    // Returns an array of (the names of) all properties
    properties: function(obj) {
        var testObj = obj || self;
        var properties = [];
        for (var prop in testObj) {
            if (typeof testObj[prop] != Inspect.TYPE_FUNCTION && typeof Inspect[prop] != Inspect.TYPE_FUNCTION) {
                properties.push(prop);
            }
        }
        return properties;
    }
};
//=====================================================================







console.log("<---------------------------------------------------------->");//debug only
console.log("<------- Starting script: test_valid_html.js -------------->");//debug only
    console.log("validate: " + validate);//debug only
    console.log("validating windowurl: " + windowurl);//debug only
    console.log("which has ");//debug only


    //main logic
    schemeName = confirmTermsConditions();
    switch(schemeName){
      case "file":
        console.log("schemeName: " + schemeName);//debug only
        sendFileData();//which also outputs results to console
        break;
      case "http":  // HTML is from server, send URL of webpage under test
        console.log("schemeName: " + schemeName);//debug only
        sendURLData();//which also outputs results to console
        break;
      default: console.log("schemeName: " + schemeName + " not validated");//debug only        
    }
    //end main logic
console.log("<------- Ending synchronos part of script: test_valid_html.js -------------->");//debug only
console.log("<---------------------------------------------------------->");//debug only