/* Validate an HTML target document 
   Input - send the web url (or contents) of the page under test
           to https://validator.nu
           in one of the formats 
           https://validator.nu/?doc=http%3A%2F%2Fvividventures.biz  
           https://validator.nu/?doc=http%3A%2F%2Fvividventures.biz&out=json

   Output - expect the results of the validation in json format

   Requires jQuery, and parseUri files to be available

   Help - https://github.com/validator/validator/wiki
          https://wiki.whatwg.org/wiki/Validator.nu_Web_Service_Interface

   Reference - http://en.wikipedia.org/wiki/Query_string
             - http://hayageek.com/jquery-ajax-post/
*/
    //Initialize some variables
    var validate = 'https://validator.nu/';//choose this webservice
    //var validate = 'https://html5.validator.nu/';//choose this webservice

    var windowurl = $(location).attr('href');//url of current window
    var protocol = parseUri(windowurl).protocol;//prefix
    var samplehtmlpage = '<!DOCTYPE html><html><head><title>Test</title></head><body><p></p></body></html>';//debug only
    var validationTestResults = null;//expect response from validate webservice
    var status = null;//response from validate
    var xhr;
    //  https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    var formData = new FormData();// this might not be needed see data: below
    //End initialize

    console.log("validating windowurl: " + windowurl);//debug only
    console.log("which has protocol: " + protocol);//debug only

    switch(protocol){
      // if it is a local file on *nix then post the contents of page under test
      case "file":  
        var mydoctype = new XMLSerializer().serializeToString(document.doctype);
        console.log("mydoctype: " + mydoctype);//debug only
        var currentPageMarkup = document.documentElement.outerHTML;//get all the html
        //currentPageMarkup = mydoctype + currentPageMarkup;//put them back together
        currentPageMarkup = samplehtmlpage;//debug only -  a small sample page

        //https://developer.mozilla.org/en-US/docs/Web/API/FormData/append
          //formData.append('out','json')
          //formData.append('laxtype','yes')
          //formData.append('parser','html5')
          //formData.append('content',currentPageMarkup)

        //console.log("currentPageMarkup: " + currentPageMarkup);//debug only
        //get the validation results from the webservice
        console.log("validate: " + validate);//debug only

        //=================================================
        // Attempting to implement the https://validator.nu/ API
        // documented at:
        //    https://wiki.whatwg.org/wiki/Validator.nu_Web_Service_Interface
        // with jQuery ajax syntax copied from http://api.jquery.com/jQuery.ajax/

        var jqXHR = $.ajax({
              /*          
              beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("Accept-Encoding", 'gzip');
                //xhrObj.setRequestHeader("Content-Type", 'text/html');
                xhrObj.setRequestHeader("Content-Type", 'multipart/form-data');
                //xhrObj.setRequestHeader("Content-Type", 'false');
                xhrObj.setRequestHeader("Content-Encoding", 'gzip');

              },
             */
              url: validate,
              type: 'post',
              cache: 'false', //do not cache the requested page
                              //eliminate need to delete history after code changes
              //contentType: 'false', //no type sent by jQuery, no default sent
              contentType: 'multipart/form-data; boundary=---------------------------314911788813839', 
              mimeType: 'multipart/form-data',

              //contentType: 'text/html', 
              processData: 'false', //do not preprocess the data
              dataType: 'json',//expect json results
              data: {
                out: 'json',
                laxtype: 'yes',
                parser: 'html',                
                content: currentPageMarkup
                //'doc': currentPageMarkup
                //'file':currentPageMarkup
              }
            });

            jqXHR.done(function( msg ) {
                alert("jqXHR done: " + msg);
                $( "#log" ).html( msg );
            });
            jqXHR.fail(function( jqXHR, textStatus, errorThrown ) {
                alert( "jqXHR failed: " + textStatus + "\n" + "errorThrown: " + errorThrown );
            });
        //=================================================





        console.log("validationTestResults: " + validationTestResults);
        console.log("status: " + status);
        console.log("xhr: " + xhr);


        
//        var property=null;
//        for (property in validationTestResults){
//            //console.log("validationTestResults: " + Object.keys(validationTestResults));//debug only
//            console.log(property + ": " + validationTestResults[property]);//debug only
//        }

        break;
      case "http":  // available from server, send server address
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