MODEL: predial
num pedrial
avaluo
nombre
departamento
municipio
propietarios FK
construcciones FK
terreno! FK

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

MODEL: Constricciones
catidad de pisos
area total
direccion
tipo de construccion: enum(industrial, comercial, recidencial)

MODEL: Terrenos
area
valor comercial
cerca de lagos
tipo terreno: enum(rural, urbano)
construcciones FK boolean
