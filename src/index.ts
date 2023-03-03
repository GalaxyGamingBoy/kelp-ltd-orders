import * as dotenv from 'dotenv'
import express from 'express';
import Routes from './routes/Routes';

// Init
dotenv.config();
const server = express();
const routes = new Routes(server, undefined);

// Routes
routes.initRoutes();

// Server
server.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server is running on port ${process.env.EXPRESS_PORT}`);
})

