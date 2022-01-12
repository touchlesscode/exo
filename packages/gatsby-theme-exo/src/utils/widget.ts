// noinspection ES6UnusedImports
import 'iframe-resizer';

declare global {
    interface Window { iFrameResizer: any, parentIFrame: any, attachEvent: any }
}

// Send some variables
var initVariables = {
    'button': 'Edit', // Optional - Button name, can be: Save, Edit, Add, Search
    //'badge': '' // Optional - Badge indicator, must be a number
};

// Resizing widget height
window.iFrameResizer = {
    targetOrigin: '*'
}

document.body.addEventListener("resize", function resetSize() {
    if ('parentIFrame' in window) window.parentIFrame.size()
});

// Send a call back to the TextKit UI
function checkAndSend() {
    if (!('parentIFrame' in window)) { // No parentIFrame object yet. Try again until its found.
        setTimeout(checkAndSend, 16);
    }
    else { //Found parentIFrame object! Sent message.
        // const origin = window.location.pathname;
        const variables = JSON.stringify(initVariables);
        if (variables.length !== 0) window.parentIFrame.sendMessage(variables, '*');
        return false;
    }
}

checkAndSend(); // Initial check

// Check and read if the TextKit UI sends the widget anything
function displayMessage(evt: any) {
    //if (evt.origin.indexOf("textkit.io") > 0) return false;
    var message = "Widget received from TextKit UI: " + evt.data;
    window.parentIFrame && window.parentIFrame.sendMessage(message, '*');
}

// Listen for messages from parent
if (window.addEventListener) {
    window.addEventListener("message", displayMessage, false);
}
else {
    window.attachEvent("onmessage", displayMessage);
}