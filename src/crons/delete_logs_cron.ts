var cron = require('node-cron');
import { Util } from "../utils/utils";
const util = new Util();
const  Logger  = require('../utils/logger')
require('dotenv').config()

cron.schedule(process.env.SCHEDULE_CRON_DELETE_LOGS, () => {
      Logger.info('Inicio da execucao da cron excluir logs antigos')
      try {
        util.deleteLogs();
      } catch (error) {
        Logger.err(error);
      }
      Logger.info('Fim da execucao da cron excluir logs antigos')
   }, {
   scheduled: true,
   timezone: "America/Sao_Paulo"
 });

