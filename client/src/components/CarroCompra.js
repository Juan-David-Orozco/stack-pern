import { useState } from "react";

export default function CarroCompra(props) {

  const [carroCompra, SetCarroCompra] = useState(props.carroCompra)


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
                    <a class="btn btn-danger btn-sm mx-3" href="#">
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
