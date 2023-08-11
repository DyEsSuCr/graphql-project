import { Button } from 'antd'
import Link from 'next/link'

export default function HeaderPredio ({ data, setToggle, removeOnePredio, predioId }) {
  return (
    <>
      <div className='predioHeader'>
        <Link href='/' style={{ fontSize: '28px', cursor: 'pointer' }}>🔙</Link>
        <h3>Nombre predio: {data.property.nombre}</h3>
        <div>
          <Button type='primary' onClick={() => setToggle(true)}>Editar</Button>
          <Button danger onClick={() => removeOnePredio(predioId)}>Eliminar</Button>
        </div>
      </div>
      <span>Avaluo: ${data.property.avaluo}$</span>
      <span>Departamento: {data.property.departamento}</span>
      <span>Municipio: {data.property.municipio}</span>
    </>
  )
}
