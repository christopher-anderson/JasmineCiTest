var fs = require('fs');
var url = 'fs.workingDirectory + 'SpecRunner.html'';
var page = require('webpage').create();
var finishedReg = /##teamcity\[progressFinish/gi;

//output any console messages and check to see if all of our testing is complete
page.onConsoleMessage = function(msg, lineNum, sourceId) {
    console.log(msg);
    if(msg.match(finishedReg)) {
        phantom.exit();
    }
};

page.open(url, function (status) {});/**
 * Created by andersonc1 on 7/10/15.
 */
