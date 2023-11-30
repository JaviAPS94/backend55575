import dotenv from 'dotenv';
import { Command } from 'commander';

const program = new Command();

program.option('--mode <modo>', 'variable de ambiente');
program.parse();

//DEVELOPMENT, PRODUCTION
const environment = program.opts().mode;

dotenv.config({
    path: (environment === 'DEVELOPMENT') ? './.env.development' : './.env.production'
});

const configs = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
};

export default configs;