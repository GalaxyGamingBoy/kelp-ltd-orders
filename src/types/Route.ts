import { HTTPMethods } from "./HTTPMethods";
import { Request, Response } from "express";
export default class Route {
    id: string
    path: string
    method: HTTPMethods
    callback: (request: Request, response: Response) => void

    constructor(id: string, path: string, method: HTTPMethods, callback: (request: Request, response: Response) => void) {
        this.id = id;
        this.path = path;
        this.method = method;
        this.callback = callback;
    }
}