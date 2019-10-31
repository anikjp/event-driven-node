# Express, Microframework & PostgreSQL

## Setup

```
$ yarn install
```

## Running

```bash
$ yarn start
yarn run v1.16.0
$ nps
nps is executing `default` : nps start
nps is executing `start` : cross-env NODE_ENV=production node dist/app.js
info:   [11/1/2019, 3:29:42 AM] [app] 
info:   [11/1/2019, 3:29:42 AM] [app] -------------------------------------------------------
info:   [11/1/2019, 3:29:42 AM] [app] Environment  : production
info:   [11/1/2019, 3:29:42 AM] [app] Version      : 1.0.0
info:   [11/1/2019, 3:29:42 AM] [app] 
info:   [11/1/2019, 3:29:42 AM] [app] API Info     : http://localhost:3000/api
info:   [11/1/2019, 3:29:42 AM] [app] Swagger      : http://localhost:3000/swagger
info:   [11/1/2019, 3:29:42 AM] [app] -------------------------------------------------------
info:   [11/1/2019, 3:29:42 AM] [app] 

```


--------
## Database
- Service : Postgress
- ORM : [TypeORM](https://typeorm.io/#/)

#### Actions :
  
  - Create/Update/Delete Entity:
  
    -- Migration Script Dir: ``` ./src/database/migrations ```

    -- Migration Command: ```yarn dbSetup```
   
    -- [Sample Script](https://typeorm.io/#/migrations/using-migration-api-to-write-migrations)
