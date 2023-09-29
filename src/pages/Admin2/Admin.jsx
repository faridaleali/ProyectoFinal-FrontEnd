import React from 'react'
import Productos from '../../components/Admin/productos'
import './admin.css'
import Usuarios from '../../components/Admin/usuarios'
import Pedidos from '../../components/Admin/pedidos'

function Admin() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='contenedor-productos-usuarios'>
        <div className='contenedor-lista'>
          <h1 className='titulo fs-2'>Mis Productos</h1>
          <Productos />
        </div>
        <div className='contenedor-lista'>
          <h1 className='titulo fs-2'>Usuarios</h1>
          <Usuarios />
        </div>
      </div>
      <div className='contenedor-lista text-center mx-auto'>
        <h1 className='titulo fs-2'>Pedidos</h1>
        <Pedidos />
      </div>
    </div>
  )
}

export default Admin;