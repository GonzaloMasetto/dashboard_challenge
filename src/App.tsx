// import { useState } from 'react'
import useUsuarios from './hooks/useUsuarios'
import './App.css'

function App() {

  const {usuariosConPosts} = useUsuarios()
  return (
    <>
      <section className='p-6'>
        <div className='rounded-tl-lg'>
          <table className='w-full text-center border-gray-300 rounded-lg'>
            <caption className='mb-4 text-lg font-semibold text-gray-800'>Listado de usuarios</caption>
            <thead className="bg-gray-100 w-full ">
              <tr>
                <th className='px-4 py-2'>ID</th>
                <th className='px-4 py-2'>Name</th>
                <th className='px-4 py-2'>Username</th>
                <th className='px-4 py-2'>Cantidad</th>
                <th className='px-4 py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usuariosConPosts?.map((usuario) => (
                <tr key={usuario.id} className="hover:bg-gray-100">
                  <td className='px-4 py-2'>{usuario.id}</td>
                  <td className='px-4 py-2'>{usuario.name}</td>
                  <td className='px-4 py-2'>{usuario.username}</td>
                  <td className='px-4 py-2'>{usuario.cantidad}</td>
                  <td className='px-4 py-2'>
                    <button className='px-2 mr-3 bg-green-300 rounded-xl'>Editar</button>
                    <button className='px-2 bg-red-300 rounded-xl'>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default App
