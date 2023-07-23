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
    | tipo_persona:                 | enum(naturares, juridicas)
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
    | area_total                    | enum(industrial, comercial, recidencial)
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
