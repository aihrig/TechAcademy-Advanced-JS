# TodoApp

This is a simple full-stack Todo app built with MongoDB/MongooseJS, Angular 12,NodeJS/ExpressJS and some very minimal Bootstrap styling.

## Development app server

Run `npm install` and then `ng serve` in ./todo-app for the front-end app dev server. Configuration of the Todo API URI is currently in the `todo-app/src/app/todos/todo.service.ts` file - `todoApiUri` variable if you need to change this.
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development API server

Run `npm install` from ./backend to install node dependencies.
Configuration file for port and database connection string is at ./config/config.js.

Run `npm start` for a dev API server. Navigate to `http://localhost:3030/api/todo` to verify server is running and to view demo data. The app will automatically reload if you change any of the source files.
