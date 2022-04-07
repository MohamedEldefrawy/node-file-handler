import {FileHandler} from "./FileHandler.mjs";

let fileHandler = new FileHandler('./test.txt');
// fileHandler.readFile();
// fileHandler.renameFile('./test.txt', './test.txt');
// fileHandler.removeFile();
fileHandler.readFileLineByLine();
