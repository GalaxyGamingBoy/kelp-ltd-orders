import * as dotenv from 'dotenv'
import express from 'express';
import Routes from './routes/Routes';
import cors from 'cors'

// Init
dotenv.config();
const server = express();
const routes = new Routes(server, undefined);
server.use(cors());

// Routes
routes.initRoutes();

// Server
server.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server is running on port ${process.env.EXPRESS_PORT}`);
})

