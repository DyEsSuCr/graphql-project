# Tencnologias usadas

| Backend         | Frontend        |
| --------------- | --------------- |
| Postgresql      | NextJS          |
| ApolloGraphql   | ApolloGraphql   |
| Node            | AntDesign       |
| Sequelize       |                 |
| Express         |                 |


# Database - MER
    +-------------------------------+
    |   Predio                      |
    +-------------------------------+
    | id_predio (PK)                |
    | avaluo                        |
    | nombre                        |
    | departamento                  |
    | municipio                     |
    +-------------------------------+
          |
          |
          v
    +-------------------------------+
    |   Propietario                 |
    +-------------------------------+
    | id_propietario(PK)            |
    | tipo_persona:                 | enum(naturales, juridicas)
    | numero_doc                    | enum(cc, ti, etc..)
    | nombres                       |
    | apellidos                     |
    | NIT                           |
    | razon_social                  |
    | direccion                     |
    | telefono                      |
    | correo                        |
    | predioID (FK)                 | 1-n
    +-------------------------------+
          |
          |
          v
    +-------------------------------+
    |   Construccion                |
    +-------------------------------+
    | id_construccion(PK)           |
    | numero_pisos                  |
    | area_total                    | enum(industrial, comercial, residencial)
    | tipo                          |
    | direccion                     |
    | predioID (FK)                 | 1-n
    +-------------------------------+
          |
          |
          v
    +-------------------------------+
    |   Terreno                     |
    +-------------------------------+
    | id_terreno (PK)               |
    | area                          |
    | valor_comercial               |
    | cerca_agua                    |
    | tipo_terreno                  | enum(rural, urbano)
    | predioID (FK)                 | 1-1
    +-------------------------------+


# Pasos
1. crear un archivo .env en la raiz de la carpeta api con los siguentes variables
      - PORT=Numero Puerto
      - DB_NAME=Nombre de la DDBB
      - USER=Nombre de usuario de la DDBB
      - PWD=Contraseña de la DDBB

2. Crear una base de datos en postgresql con el nombre ingresado en el archivo .env

3. crear un archivo .env.local en la raiz de la carpeta client con la siguente variable
      - NEXT_PUBLIC_PORT_GRAPHQL: El mismo Puerto que utilizado en graphql

4. Abrir una terminal ingresar los siguentes comandos
```
cd api
pnpm i
pnpm dev 
```


5. Abrir una nueva terminal ingresar los siguentes comandos
```
cd client
pnpm i
pnpm dev 
```

6. Abrir ApolloGraphql

      ingresar a: http://localhost:(numero puerto)/graphql
