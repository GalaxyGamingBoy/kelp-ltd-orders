# Express Template

A template that I use for almost all of my express rest apis.

## Contents
+ `src/auth/AuthManager.ts`: Implements Authentication.
+ `src/db/DBManager.ts`: Implements the methods for quering SQL.
+ `src/db/SQLQueries.ts`: The location of your SQL Queries. Has a function for formatting a query.
+ `src/routes/routes.ts`: The Routes of you api
+ `src/types/HTTPMethods.ts`: The supported methods.
+ `src/types/HTTPStatusCodes.ts`: All the HTTP Status Codes.
+ `src/types/Route.ts`: The route template.
+ `src/types/SQLQuery.ts`: The SQL Query template.
+ `src/index.ts`: The starting point of your library.