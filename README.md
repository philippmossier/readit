# [WIP]

## Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

## --------------------- Daily dev setup ------------------------

### Database Window

```bash
sudo service postgresql start
psql -d readit -U phil
```

### Backend Window

```bash
npm run dev
```

### Frontend Window

```bash
cd client
npm run dev
```

### OFTEN USED COMMANDS

```bash
npm run typeorm migration:generate -- --name create-votes-table
npm run typeorm migration:run
```