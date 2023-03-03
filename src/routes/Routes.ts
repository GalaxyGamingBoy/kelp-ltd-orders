import Route from "../types/Route";
import { Express } from "express";
import Airtable from "../db/Airtable";
import { HTTPMethods } from "../types/HTTPMethods";
import { HTTPStatusCodes } from "../types/HTTPStatusCodes";

const appRoutes: Array<Route> = [
    new Route("index", "/", HTTPMethods.GET, (_, res) => {
        res.status(HTTPStatusCodes.OK).end("Hello Express!");
    }),
    new Route("getOrders", "/orders", HTTPMethods.GET, async (_, res) => {
        await Airtable.getOrders(res);
    }),
    new Route("getOrders", "/orders/:ign", HTTPMethods.GET, async (req, res) => {
        await Airtable.getOrdersByIGN(res, req.params.ign);
    })
]

export default class Routes {
    routes: Array<Route>;
    server: Express;

    constructor(server: Express, customRoutes: Array<Route> | undefined) {
        this.server = server;

        if (customRoutes !== undefined) {
            this.routes = customRoutes;
        } else {
            this.routes = appRoutes;
        }
    }

    initRoutes() {
        this.routes.forEach(route => {
            switch (route.method) {
                case HTTPMethods.GET:
                    this.server.get(route.path, route.callback);
                    break;
                case HTTPMethods.POST:
                    this.server.post(route.path, route.callback);
                    break;
                case HTTPMethods.DELETE:
                    this.server.delete(route.path, route.callback);
                    break;
            }
        })
    }
}