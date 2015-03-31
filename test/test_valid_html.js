/* Validate an HTML target document 
   Input - send the web url (or contents) of the page under test
           to https://validator.nu
           in one of the GET formats 
           https://validator.nu/?doc=http%3A%2F%2Fvividventures.biz  
           https://validator.nu/?doc=http%3A%2F%2Fvividventures.biz&out=json

   Output - expect the results of the validation in json format
            status = 'null'  for no errors,
                   = 'error'  if there were html errors

   Requires jQuery, and parseUri files to be available

   Help - https://github.com/validator/validator/wiki
          https://wiki.whatwg.org/wiki/Validator.nu_Web_Service_Interface

   Reference - http://en.wikipedia.org/wiki/Query_string
             - http://hayageek.com/jquery-ajax-post/
*/
    //Initialize some variables
    var validate = 'https://validator.nu/';//choose this webservice
    var windowurl = window.location.href;//url of current window
    var protocol = parseUri(windowurl).protocol;//prefix
    //var samplehtmlpage = '<!DOCTYPE html><html><head><title>Test</title></head><body><p></p></body></html>';//debug only
    // insert a failed tag below to see if validator detects error 'no end title tag'
    var samplehtmlpage = '<!DOCTYPE html><html><head><title>Test<title></head><body><p></p></body></html>';//debug only
    var validationTestResults = null;//expect response from validate webservice
    var status = null;//result returned to the caller of this function
    //End initialize

    console.log("validating windowurl: " + windowurl);//debug only
    console.log("which has protocol: " + protocol);//debug only






//=====================================================================
//http://codeinthehole.com/writing/inspecting-javascript-objects/

var Inspect = {
    TYPE_FUNCTION: 'function',
    // Returns an array of (the names of) all methods
    methods: function(obj) {
        var testObj = obj || self;
        var methods = [];
        for (prop in testObj) {
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
        for (prop in testObj) {
            if (typeof testObj[prop] != Inspect.TYPE_FUNCTION && typeof Inspect[prop] != Inspect.TYPE_FUNCTION) {
                properties.push(prop);
            }
        }
        return properties;
    }
}
//=====================================================================









    switch(protocol){
      case "file":  // If it is a local file on *nix then POST the 
        // browsers rendition of the contents of page under test.

        // Note the browser will 'fix' some minor broken html before
        // rendering in the browser.
        // The 'currentPageMarkup' variable contains the fixed
        // version of the html which will (incorrectly) pass
        // the validate test.

        // Alternately post the page to be tested to your web site so
        // the URL of the html to be tested will be sent directly to
        // validate webservice by the following case statment.

        var mydoctype = new XMLSerializer().serializeToString(document.doctype);
        console.log("mydoctype: " + mydoctype);//debug only

        var currentPageMarkup = document.documentElement.outerHTML;//get all the html
        currentPageMarkup = mydoctype + currentPageMarkup;//put them back together
        //currentPageMarkup = samplehtmlpage;//debug only -  a small sample page
        //console.log("currentPageMarkup: " + currentPageMarkup);//debug only

        //get the validation results from the webservice
        console.log("validate: " + validate);//debug only
        //=================================================
        // Implement the https://validator.nu/ API
        // documented at:
        //    https://github.com/validator/validator/wiki/Service:-HTTP-interface
        //    deprecated  https://wiki.whatwg.org/wiki/Validator.nu_Web_Service_Interface

        //  https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
          var formData = new FormData();
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
          formData.append('charset','UTF-8')
          formData.append('out','json')
          formData.append('laxtype','yes')
          formData.append('parser','html5')

        //https://developer.mozilla.org/en-US/docs/Web/Guide/Using_FormData_Objects
          // JavaScript file-like object...
          var blob = new Blob([currentPageMarkup], { type: "text/html"});
          formData.append("content", blob);

          var oXHR = new XMLHttpRequest();
          oXHR.open("POST", validate);
          oXHR.send(formData);

          oXHR.onreadystatechange = function(){
              //the other readyState events 0..3 could be handled here too
              if (oXHR.readyState===4){//done
                  console.log('oXHR.response: ' + oXHR.response);
                  validationTestResults = JSON.parse(oXHR.response);//requested JSON response
                  //console.log("validationTestResults: " + validationTestResults);
                  //console.log("Inspect.properties(validationTestResults): " + Inspect.properties(validationTestResults));
                  //how many messages in the JSON array?   last message has first error!
                  for (index = validationTestResults.messages.length-1; index > 0; index--) {
                      if(validationTestResults.messages[index].type==="error"){
                          status = "error: Invalid HTML5 in local file  tested at validator.nu";
                          console.log("validationTestResults.messages[index].type: " +
                                       validationTestResults.messages[index].type);
                          console.log("validationTestResults.messages[index].message: " + 
                                       validationTestResults.messages[index].message);
                          console.log("validationTestResults.messages[index].extract: " +
                                       validationTestResults.messages[index].extract);
                      }
                  }
              console.log("status: " + status);
              }
          }
        //=================================================


        //return status;
        break;

      case "http":  // available from server, send server address
        //TODO 27-MAR 2015: needs testing
        console.log("protocol: " + protocol);//debug only
        validationTestResults = jQuery.getJSON(windowurl + "&out=json");//get the validation results
        console.log("validationTestResults: " + validationTestResults);//debug only
        break;

      default:
        console.log("protocol: " + protocol + " not validated");//debug only        
    }
    //if validationTestResults are passing then report test passed
    /*
    if (validationTestResults==="passing"){
        //return true;  
    console.log("Encoding: " + encoding + "passed Validator.nu");//debug only
    }
        //return false;
    */