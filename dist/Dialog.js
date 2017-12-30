"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
var Dialog;
(function (Dialog) {
    function SelectFile() {
        return new Promise(function (fulfill, reject) {
            try {
                let dialogOptions = {
                    properties: ['openFile']
                };
                electron_1.remote.dialog.showOpenDialog(electron_1.remote.getCurrentWindow(), dialogOptions, function (filePaths) {
                    if (filePaths && filePaths.length > 0) {
                        fulfill(filePaths[0]);
                    }
                    else {
                        reject("No file selected");
                    }
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    Dialog.SelectFile = SelectFile;
    function SelectDirectory() {
        return new Promise(function (fulfill, reject) {
            try {
                let dialogOptions = {
                    properties: ['openDirectory']
                };
                electron_1.remote.dialog.showOpenDialog(electron_1.remote.getCurrentWindow(), dialogOptions, function (filePaths) {
                    if (filePaths && filePaths.length > 0) {
                        fulfill(filePaths);
                    }
                    else {
                        fulfill([]);
                    }
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    Dialog.SelectDirectory = SelectDirectory;
})(Dialog = exports.Dialog || (exports.Dialog = {}));
