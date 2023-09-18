import React, { useEffect, useState } from "react";
import './styles/allProductos.css';

const AllProductos = () => {

  const [productos, setProductos] = useState([])

  const productList = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()
    setProductos(products)

  }

  useEffect(() => {
    productList()
  }, []) // Para que se renderice una sola vez

  return (
    <div className='contenedor-productos'>
      {productos.map((props) => (
        <div className='card-products'>
          <div className='contenedor-texto'>
            <p> <span className='fw-semibold'>Nombre:</span> {props.title}</p>
            <p> <span className='fw-semibold'>Imagen:</span></p>
            <p> <span className='fw-semibold'>Precio:</span> ${props.price}</p>
            <p> <span className='fw-semibold'>Activo:</span></p>
            <p> <span className='fw-semibold'>Descripcion:</span> {props.description}</p>
          </div>
          <div className='boton-editar-eliminar'>
            <button className='mb-2 btn btn-dark' type="button">Editar</button>
            <button
              className='mb-2 btn btn-dark'>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllProductos 