import * as dotenv from 'dotenv'
import express from 'express';
import Routes from './routes/Routes';
import SQLQueries from './db/SQLQueries';
import DBManager from './db/DBManager';

// Init
dotenv.config();
const server = express();
const routes = new Routes(server, undefined);
const sqlQueries = new SQLQueries();
DBManager.sendQuery(sqlQueries.getQuery("initDatabase"));

// Routes
routes.initRoutes();

// Server
server.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server is running on port ${process.env.EXPRESS_PORT}`);
})

