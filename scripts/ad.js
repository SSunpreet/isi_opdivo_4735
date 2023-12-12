$(document).ready(function () {

    // Ad has started.
    assignClickHandlers();
    
    var agent = navigator.userAgent;
    var checkagent1 = agent.includes("Brightsign");
    var checkagent2 = agent.includes("MW22");
    var checkagent3 = agent.includes("MW15");
    
    function openExternalPDF(e, pdfUrl) {
        console.log(pdfUrl);
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestPDFView(pdfUrl);
        } else {
            window.open(pdfUrl);
        }
    }

    function openExternalLinkFull(e, clickTag) {
        console.log(clickTag);
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestFullscreenBrowserView(clickTag);
        } else {
            window.open(clickTag);
        }
    }
    
    function assignClickHandlers() {
        
        $('#main-link')[0].addEventListener("click", function(e) {
            openExternalLinkFull(e, "https://www.patientsupport.bmscustomerconnect.com/opdivo-with-you-registration");
        }, false);

        /*$('#fda-link')[0].addEventListener("click", function(e) {
            openExternalLinkFull(e, "https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program");
        }, false);*/

        $('#fpi-link')[0].addEventListener("click", function(e) {
            openExternalPDF(e, "https://packageinserts.bms.com/pi/pi_yervoy.pdf");
        }, false);
        
        $('#mg-link')[0].addEventListener("click", function(e) {
            openExternalPDF(e, "https://packageinserts.bms.com/medguide/medguide_yervoy.pdf");
        }, false);
        
        $('#fpi-link2')[0].addEventListener("click", function(e) {
            openExternalPDF(e, "https://packageinserts.bms.com/pi/pi_yervoy.pdf");
        }, false);
        
        $('#mg-link2')[0].addEventListener("click", function(e) {
            openExternalPDF(e, "https://packageinserts.bms.com/medguide/medguide_yervoy.pdf");
        }, false);

        $('#fpi-link3')[0].addEventListener("click", function(e) {
            openExternalPDF(e, "https://packageinserts.bms.com/pi/pi_opdivo.pdf");
        }, false);

        $('#mg-link3')[0].addEventListener("click", function(e) {
            openExternalPDF(e, "https://packageinserts.bms.com/medguide/medguide_opdivo.pdf");
        }, false);

        $('#fpi-link4')[0].addEventListener("click", function(e) {
            openExternalPDF(e, "https://packageinserts.bms.com/pi/pi_opdivo.pdf");
        }, false);

        $('#mg-link4')[0].addEventListener("click", function(e) {
            openExternalPDF(e, "https://packageinserts.bms.com/medguide/medguide_opdivo.pdf");
        }, false);

        $('#legal-link')[0].addEventListener("click", function(e) {
            openExternalLinkFull(e, "https://www.bms.com/legal-notice.html");
        }, false);

        $('#privacy-link')[0].addEventListener("click", function(e) {
            openExternalLinkFull(e, "https://www.bms.com/privacy-policy.html");
        }, false);
    }

    //*** Video Controls OFF for the DEVICE and ON for the BROWSER
    function deviceVideoControlsOff() {
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestVideoControls("opdivo_int", false);  //***  CHANGE VALUE IN QUOTES
        } else {
            document.getElementById("opdivo_int").controls = true;  //***  CHANGE VALUE IN QUOTES
        }
    }

    deviceVideoControlsOff();

    // function show_doubleclick() {
    //     var img = document.createElement("img");

    //     //URLS for client and test tags:
    //     var imgsrc = 'https://ad.doubleclick.net/ddm/trackimp/N737651.1915046PATIENTPOINT.COM/B26799610.319728179;dc_trk_aid=513484804;dc_trk_cid=161207231;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=?';

    //     //Vars for generating current date and random number and device ID:
    //     var datea = new Date();
    //     var dateb = datea.getTime();
    //     var min=1;
    //     var max=500000; 
    //     var random = Math.floor(Math.random() * (+max - +min)) + +min;

    //     //Replaces timestamp placeholders with device name and time:

    //     var newimgsrc = imgsrc.replace(/(ord=).*?(;)/,'ord=' + dateb + random + ';');

    //     //Appends client pixel to ad:
    //     img.src = newimgsrc;
    //     img.width = "1";
    //     img.height = "1";
    //     img.alt = "Advertisement";
    //     document.body.appendChild(img);

    // }

    // setTimeout(function(){
    //     show_doubleclick();
    // }, 1000);
});
