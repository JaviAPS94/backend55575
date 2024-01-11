import winston from 'winston';

//Ejercicio multientorno
// const ENVIRONMENT = 'production';
// let logger;

// if(ENVIRONMENT === 'production') {
//     //prodLogger
//     logger = winston.createLogger({
//         transports: [
//             new winston.transports.Console({
//                 level: 'http'
//             }),
//             new winston.transports.File({
//                 filename: 'logs/production.log',
//                 level: 'warn'
//             })
//         ]
//     });
// } else {
//     //devLogger
//     logger = winston.createLogger({
//         transports: [
//             new winston.transports.Console({
//                 level: 'verbose'
//             })
//         ]
//     });
// }

//vamos a crear nuestro logger, donde vamos a definir nuestro transporte (s) y el nivel en el cual van a trabajar
// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({
//             level: 'info'
//         }),
//         new winston.transports.File({
//             filename: 'logs/dev.log',
//             level: 'warn'
//         })
//     ]
// });

const customLevelOptions = {
    levels: {
        error: 0,
        warning: 1,
        info: 2,
        debug: 3
    },
    colors: {
        error: 'red',
        warning: 'yellow',
        info: 'green',
        debug: 'blue'
    }
};

const logger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.colorize({
                    all: true,
                    colors: customLevelOptions.colors
                }),
                winston.format.simple()
            )
        })
    ]
})

export const addLogger = (req, res, next) => {
    req.logger = logger;
    req.logger.info(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
    next();
}