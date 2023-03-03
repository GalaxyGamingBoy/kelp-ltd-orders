export default class SQLQuery {
    name: string;
    query: string;

    constructor(name: string, query: string) {
        this.name = name;
        this.query = query;
    }

    formatQuery(parameters: { id: string, value: string }[]) {
        let formattedQuery = this.query;
        parameters.forEach(paramater => {
            formattedQuery = formattedQuery.replace(`%${paramater.id}%`, paramater.value);
        })
        this.query = formattedQuery;
        return this;
    }
}