import SQLQuery from "../types/SQLQuery";

export default class SQLQueries {
    queries: Array<SQLQuery>;

    constructor() {
        this.queries = [
            new SQLQuery("initDatabase", "CREATE TABLE if not exists `Database`;"),
        ];
    }

    getQuery(name: string): SQLQuery {
        let query = this.queries.find(query => query.name === name);
        if (query) {
            return query;
        }
        return new SQLQuery("error", "Query not found");
    }
}