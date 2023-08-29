import fs = require('fs');
const  Logger  = require('../utils/logger')
import { unlink } from 'node:fs';
const { parse, differenceInDays  } = require("date-fns");
const path = require('path');
require('dotenv').config()


export class Util {
    getFilesInFolder(folderPath : fs.PathLike) {
        try {
            const fileNames = fs.readdirSync(folderPath);
            return fileNames;
        } catch (error) {
            Logger.error(error)
            return [];
        }
    }

    deleteFile(filePath : Buffer){
        unlink(filePath, (err) => {
            if (err) throw err;
        }); 
    }

    deleteLogs(){
        const logsPath = path.resolve(__dirname, "../logs");
        const logsNames = this.getFilesInFolder(logsPath)
        for(const logName of logsNames){
            try {
                const dateLog = parse(logName.slice(4, -4), 'yyyy_MM_dd', new Date());
                const dateNow = new Date();
                const daysDifference = differenceInDays(dateNow, dateLog)
                if(daysDifference >= process.env.DAYS_TO_DELETE_LOG){
                    this.deleteFile(Buffer.from(`${logsPath}\\${logName}`, "utf-8"))
                    Logger.info(`O arquivo ${logName} foi deletado.`)
                }
            } catch (error) {
                Logger.error(error)
            }
        }
    }
}