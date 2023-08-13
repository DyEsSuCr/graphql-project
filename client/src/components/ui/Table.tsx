import { Property } from '@/interfaces/propertys.interface'
import Link from 'next/link'

export const Table = ({ propertys }: { propertys: Property[] }) => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Nombre
            </th>
            <th scope='col' className='px-6 py-3'>
              Municipio
            </th>
            <th scope='col' className='px-6 py-3'>
              Departamento
            </th>
            <th scope='col' className='px-6 py-3'>
              Avaluo
            </th>
            <th scope='col' className='px-6 py-3'>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {
            propertys.map((property) => (
              <tr key={property.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {property.nombre}
                </th>
                <td className='px-6 py-4'>
                  {property.municipio}
                </td>
                <td className='px-6 py-4'>
                  {property.departamento}
                </td>
                <td className='px-6 py-4'>
                  ${property.avaluo}
                </td>
                <td className='px-6 py-4'>
                  <Link className='text-white py-1 px-2 rounded-sm bg-blue-700 hover:bg-blue-500 duration-200' href={`property/${property.id}`}>Ver</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
