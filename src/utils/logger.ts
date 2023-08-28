const pino = require("pino");
const { format } = require("date-fns");

const dateNow = new Date();
const dateFormat = 'yyyy_MM_dd';
const dateNowFormat = format(dateNow, dateFormat);
const path = require('path');
const logsPath = path.resolve(__dirname, "../logs");

const fileTransport = pino.transport({
    pipeline: [{
        target: 'pino-pretty'
      }, {
        // Use target: 'pino/file' to write to stdout
        // without any change.
        target: 'pino/file',
        options: { destination: `${logsPath}/log_${dateNowFormat}.txt` }
      }]
  
});

module.exports = pino({
    formatters: {
        level: (label) => {
          return { level: label.toUpperCase() };
        },
    },
    timestamp: pino.stdTimeFunctions.isoTime,
},
fileTransport
);