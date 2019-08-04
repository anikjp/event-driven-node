# Rent-Me API with Express, Microframework & PostgreSQL

## Setup

```
$ yarn install
```

## Running

```
$ yarn start serve
```


--------
## Database
- Service : Postgress
- ORM : [TypeORM](https://typeorm.io/#/)

#### Actions :
  - Create/Update/Delete Entity:
    -- Migration Script Dir: `./src/database/migrations`
    -- Migration Command: `yarn dbSetup`
    -- [Sample Script](https://typeorm.io/#/migrations/using-migration-api-to-write-migrations)
