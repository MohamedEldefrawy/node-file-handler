import {readFileSync, renameSync,unlinkSync} from 'fs';

export class FileHandler {
    _name;

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }


    constructor(name) {
        this._name = name;
    }

    readFile() {
        try {
            const data = readFileSync(this._name, 'utf8')
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    renameFile(oldPath, newPath) {
        renameSync(oldPath, newPath);
    }

    removeFile() {
        unlinkSync(this._name);
    }

    readJsonFile() {

    }
}