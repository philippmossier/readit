# Shell history

mkdir readit && cd ./readit
typeorm init --database postgres

// update pcks coming with typeorm init
npm install pg@latest reflect-metadata@latest typeorm@latest ts-node@latest @types/node@latest typescript@latest

## login to psql with username and pw

psql
phil

```psql
CREATE DATABASE readit
\c readit
\dt
```

## Shell history2

npm install express
npm install -D @types/express morgan @types/morgan
npm install -D nodemon
npm i jsonwebtoken cookie cookie-parser
npm i -D @types/jsonwebtoken @types/cookie @types/cookie-parser
npm i dotenv
npm i class-transformer class-validator

## package.json

```json
      "dev": "nodemon --exec ts-node src/server.ts"
```

## snippets & hotkeys

*snippets:*
imp tab (import module)
dob tab (descrutured object)
tryc tab (trycatch block)
nfn tab (named function)
clg (console.log(bla))
useState

*vscode hotkeys:*
ctrl + . (immport all missing modules)
ctrl + / (jsx comments)

## typeorm cli

typeorm entity:create --name Post

npm run typeorm schema:drop
npm run typeorm migration:generate -- --name create-users-table
npm run typeorm migration:run
npm run typeorm migration:revert

## shell client

npx create-next-app client
npm install --save-dev @types/react typescript
// create empty tsconfig.json and restart app
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm i -D @svgr/webpack
