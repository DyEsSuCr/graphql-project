export interface Property {
  id?: string
  nombre: string
  avaluo: number
  municipio: string
  departamento: string
}

export interface Land {
  id?: string
  area: number
  cerca_fuentes: boolean
  precio_comercial: number
  tipo_terreno: string
}

export interface Build {
  id?: string
  area: number
  pisos: number
  direccion: string
  tipo_construccion: string
}
