function serverDate() {
    let xmlHttp;

    try {
        // FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    } catch (error) {
        // IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (errorMsxml2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (errorMicrosoft) {
                //AJAX not supported, use CPU time.
                alert('AJAX not supported');
            }
        }
    }

    xmlHttp.open('HEAD', window.location.href.toString(), false);
    xmlHttp.setRequestHeader('Content-Type', 'text/html');
    xmlHttp.send('');

    return xmlHttp.getResponseHeader('Date');
}

export default serverDate;
