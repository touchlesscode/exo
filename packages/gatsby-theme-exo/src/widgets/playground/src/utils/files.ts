import { TPlaygroundContact } from "../providers/ContactProvider";
import { TWidgetUrl } from "../providers/WidgetProvider";

export function downloadObjectAsJson(exportObj: any, exportName: string){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

export function handleFileSelect(evt: any, func: (data: any) => void) {
    let files = evt.target.files;

    // use the 1st file from the list
    let f = files[0];

    let reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e: any) {
            func(e.target.result);
        };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsText(f);
}

export function validateWidgetFile(data: TWidgetUrl[]) {
    if (!Array.isArray(data)) {
        return false;
    }

    let pass = true;

    data.forEach(item => {
        if (!item.hasOwnProperty('active')) { pass = false }
        if (!item.hasOwnProperty('id')) { pass = false }
        if (!item.hasOwnProperty('name')) { pass = false }
        if (!item.hasOwnProperty('order')) { pass = false }
        if (!item.hasOwnProperty('type')) { pass = false }
        if (!item.hasOwnProperty('url')) { pass = false }
    });

    return pass;
}

export function validateContactsFile(data: TPlaygroundContact[]) {
    if (!Array.isArray(data)) {
        return false;
    }

    let pass = true;

    data.forEach(item => {
        if (!item.hasOwnProperty('external')) { pass = false }
        if (!item.hasOwnProperty('id')) { pass = false }
        if (!item.hasOwnProperty('name')) { pass = false }
        if (!item.hasOwnProperty('tag')) { pass = false }
    });

    return pass;
}