import {readFileSync, renameSync, unlinkSync, createReadStream} from 'fs';
import {createInterface} from 'readline'

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

    readFileLineByLine() {
        try {
            const readLine = createInterface({
                input: createReadStream(this._name),
                crlfDelay: Infinity
            });

            readLine.on('line', (line) => {
                console.log(line);
            });

        } catch (err) {
            console.error(err);
        }
    }

    renameFile(oldPath, newPath) {
        renameSync(oldPath, newPath);
    }

    removeFile() {
        unlinkSync(this._name);
    }

    readJsonFile(name) {
        try {
            const data = JSON.parse(readFileSync(name, 'utf8'));
            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }
}