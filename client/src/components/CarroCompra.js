import { useState } from "react";

export default function CarroCompra(props) {

  const [carroCompra, setCarroCompra] = useState(props.carroCompra)

  const eliminarCompra = (product) => {
    setCarroCompra(carroCompra.filter((compra) => compra.id !== product.id))
    props.deleteCarroCompra(product)
  }

  return (
    <>
      <h1>Carro de Compra</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Foto</th>
          </tr>
        </thead>
          <tbody>
            {
              carroCompra.map((compra) => (
                <tr key={compra.id}>
                  <td scope="row"> {compra.titulo} </td>
                  <td>
                    <img src={compra.contenido} alt={compra.contenido} />
                    <a
                      className="btn btn-danger btn-sm mx-3"
                      onClick={() => eliminarCompra(compra)}
                    >
                      Eliminar
                    </a>
                  </td>
                </tr>
              ))
            }
          </tbody>
      </table>
    </>
  )
}
