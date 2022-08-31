# NodeJS Controller of housing and housing contracts API REST - MySQL, Express.

Simple Crud for managing and administering homes with a database and all the services of the CRUD concept.

You must make sure to create a database according to the models and controllers of the project, so that the edpoints return the correct content, you will find the queries to create the database in the root folder in a file called 'sql'.

* run the project: `npm run dev`

* Port: `http://localhost:8081`
* Don't forget to change the MySQL user settings in `./config/db.config.js`

## Methods of use [you can use Postman to try it]

# * VIVIENDAS * 

1. Create :
HTTP Method: POST.
```
POST - http:/localhost:8081/api/viviendas/
```

2. Read :

HTTP Method: GET.
```
GET -  http://localhost:8081/api/viviendas/
```

HTTP Method: GET [for specific id].
```
GET -  http://localhost:8081/api/viviendas/{id}
```

3. Update :
HTTP Method: PUT.
```
PUT - http://localhost:8081/api/viviendas/{id}
```

4. Delete :
HTTP Method: DELETE.
```
DELETE  - http://localhost:8081/api/viviendas/{id}
```


# * CONTRATOS * 

1. Create :
HTTP Method: POST.
```
POST - http:/localhost:8081/api/contratos/
```

2. Read :

HTTP Method: GET.
```
GET -  http://localhost:8081/api/contratos/
```

HTTP Method: GET [for specific id].
```
GET -  http://localhost:8081/api/contratos/{id}
```

3. Update :
HTTP Method: PUT.
```
PUT - http://localhost:8081/api/contratos/{id}
```

4. Delete :
HTTP Method: DELETE.
```
DELETE  - http://localhost:8081/api/contratos/{id}
```



# * PROPIETARIOS * 

1. Create :
HTTP Method: POST.
```
POST - http:/localhost:8081/api/propietarios/
```

2. Read :

HTTP Method: GET.
```
GET -  http://localhost:8081/api/propietarios/
```

HTTP Method: GET [for specific id].
```
GET -  http://localhost:8081/api/propietarios/{id}
```

3. Update :
HTTP Method: PUT.
```
PUT - http://localhost:8081/api/propietarios/{id}
```

4. Delete :
HTTP Method: DELETE.
```
DELETE  - http://localhost:8081/api/propietarios/{id}
```
# * INQUILINOS * 

1. Create :
HTTP Method: POST.
```
POST - http:/localhost:8081/api/inquilinos/
```

2. Read :

HTTP Method: GET.
```
GET -  http://localhost:8081/api/inquilinos/
```

HTTP Method: GET [for specific id].
```
GET -  http://localhost:8081/api/inquilinos/{id}
```

3. Update :
HTTP Method: PUT.
```
PUT - http://localhost:8081/api/inquilinos/{id}
```

4. Delete :
HTTP Method: DELETE.
```
DELETE  - http://localhost:8081/api/inquilinos/{id}
