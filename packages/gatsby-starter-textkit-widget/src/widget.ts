// noinspection ES6UnusedImports
import 'iframe-resizer';

declare global {
    interface Window { iFrameResizer: any, parentIFrame: any, attachEvent: any }
}

// Send some variables
var initVariables = {
    //'button': 'Edit', // Optional - Button name, can be: Save, Edit, Add, Search
    //'badge': '' // Optional - Badge indicator, must be a number
};

if (typeof window !== 'undefined') {
    // Resizing widget height
    window.iFrameResizer = {
        targetOrigin: window.location.ancestorOrigins[0]
    }

    document.body.addEventListener("resize", function resetSize() {
        if ('parentIFrame' in window) window.parentIFrame.size()
    });
}

// Send a call back to the Parent UI
function checkAndSend() {
    if (typeof window !== 'undefined') {
        if (!('parentIFrame' in window)) { // No parentIFrame object yet. Try again until its found.
            setTimeout(checkAndSend, 16);
        }
        else { //Found parentIFrame object! Sent message.
            // const origin = window.location.pathname;
            const variables = JSON.stringify(initVariables);
            if (variables.length !== 0) window.parentIFrame.sendMessage(variables, window.location.ancestorOrigins[0]);
            return false;
        }
    }
}

checkAndSend(); // Initial check

// Check and read if the parent UI sends the widget anything
function displayMessage(evt: any) {
    
    var message = "Widget received from parent: " + evt.data;
    if (typeof window !== 'undefined') {
        console.log({mess: message, loc: window.location.ancestorOrigins[0]})
        window.parentIFrame && window.parentIFrame.sendMessage(message, window.location.ancestorOrigins[0]);
    }
}

// Listen for messages from parent
if (typeof window !== 'undefined') {
    if (window.addEventListener) {
        window.addEventListener("message", displayMessage, false);
    }
    else {
        window.attachEvent("onmessage", displayMessage);
    }
}