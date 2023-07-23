MODEL: predial
num pedrial
avaluo
nombre
departamento
municipio

MODEL: Propietario
tipo de propietaio: enum(naturares, juridicas)
1
tipo documento
num documento
nombres
apellidos
2
NIT
razon social
direccion
phone
email!
predioId FK 1-M

MODEL: Constricciones
catidad de pisos
area total
direccion
tipo de construccion: enum(industrial, comercial, recidencial)
predioId FK 1-M

MODEL: Terrenos
area
valor comercial
cerca de lagos
tipo terreno: enum(rural, urbano)
construcciones FK boolean
predioId FK 1-1


    +--------------+
    |    Predio    |
    +--------------+
    | id_predio (PK)|
    | numero_predial|
    | avaluo       |
    | nombre       |
    | departamento |
    | municipio    |
    +--------------+
          |
          |
          v
    +--------------+
    |   Propietario |
    +--------------+
    | id_propietario(PK)|
    | tipo_persona |
    | numero_doc   |
    | nombres      |
    | apellidos    |
    | NIT          |
    | razon_social |
    | direccion    |
    | telefono     |
    | correo       |
    | id_predio (FK)|
    +--------------+
          |
          |
          v
    +----------------+
    | Construccion   |
    +----------------+
    | id_construccion(PK)|
    | numero_pisos  |
    | area_total    |
    | tipo         |
    | direccion    |
    | id_predio (FK)|
    +----------------+
          |
          |
          v
    +----------------+
    |   Terreno      |
    +----------------+
    | id_terreno (PK)|
    | area          |
    | valor_comercial|
    | cerca_agua    |
    | tipo_terreno  |
    | id_predio (FK)|
    +----------------+
