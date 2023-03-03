import airtable from "airtable";
import { HTTPStatusCodes } from "../types/HTTPStatusCodes";
import { Response } from "express";

export default class Airtable {
    static base: airtable.Base;

    static async getOrders(res: Response) {
        let orders: Array<JSON> = [];
        Airtable.base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE || "");
        return this.base(process.env.AIRTABLE_TABLE || "").select().eachPage(function page(records, fetchNextPage) {
            records.forEach(function (record) {
                orders.push(record._rawJson);
            });
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
            res.status(HTTPStatusCodes.OK).json(orders);
            return orders;
        });
    }
    static async getOrdersByIGN(res: Response, ign: string) {
        let orders: Array<JSON> = [];
        Airtable.base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE || "");
        return this.base(process.env.AIRTABLE_TABLE || "").select({ filterByFormula: `{What is your in-game username?} = '${ign}'` }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function (record) {
                orders.push(record._rawJson);
            });
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
            res.status(HTTPStatusCodes.OK).json(orders);
            return orders;
        });
    }
}