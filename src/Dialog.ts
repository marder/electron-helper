import { remote } from 'electron';

export namespace Dialog {

	export function SelectFile(): Promise<string> {
		return new Promise(function (fulfill, reject) {
			try {

				let dialogOptions: Electron.OpenDialogOptions = {
					properties: ['openFile']
				}

				remote.dialog.showOpenDialog(remote.getCurrentWindow(), dialogOptions, function (filePaths) {
					if (filePaths && filePaths.length > 0) {
						fulfill(filePaths[0]);
					} else {
						reject("No file selected");
					}
				});

			} catch (err) {
				reject(err);
			}
		});
	}

	export function SelectDirectory(): Promise<string[]> {
		return new Promise(function (fulfill, reject) {
			try {

				let dialogOptions: Electron.OpenDialogOptions = {
					properties: ['openDirectory']
				};

				remote.dialog.showOpenDialog(remote.getCurrentWindow(), dialogOptions, function (filePaths) {
					if (filePaths && filePaths.length > 0) {
						fulfill(filePaths);
					} else {
						fulfill([]);
					}
				});

			} catch (err) {
				reject(err);
			}
		});
	}

}