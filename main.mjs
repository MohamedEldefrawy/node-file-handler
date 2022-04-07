import {FileHandler} from "./FileHandler.mjs";

let fileHandler = new FileHandler('./test.txt');
fileHandler.readFile();
fileHandler.renameFile('./test.txt', './test.txt');
fileHandler.writeFile('./write-file.txt');
fileHandler.readFileLineByLine();
fileHandler.readJsonFile('./data.json');
fileHandler.removeFile();
