import Link from 'next/link'
import { ModalForm } from './ModalForm'
import { Property } from '@/interfaces/propertys.interface'
import { Button } from 'antd'

export default function HeaderProperty ({ property }: { property: Property }) {
  return (
    <>
      <header className='flex justify-between items-center mt-4'>
        <Link href='/' className='text-lg cursor-pointer'>🔙</Link>
        <h3>Nombre predio: {property.nombre}</h3>
        <div>
          <ModalForm title='Editar Predio' />
          <Button danger>Eliminar</Button>
        </div>
      </header>

      <section className='flex flex-col my-4'>
        <p>Avaluo: ${property.avaluo}</p>
        <p>Departamento: {property.departamento}</p>
        <p>Municipio: {property.municipio}</p>
      </section>
    </>
  )
}
