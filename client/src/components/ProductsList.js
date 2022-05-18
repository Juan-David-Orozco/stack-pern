import { useState, useEffect } from "react";

export default function ProductsList(props) {

  const [products, setProducts] = useState([]);
  const [ingreso, SetIngreso] = useState(props.ingreso)

  const loadProducts = async () => {
    const response = await fetch("http://localhost:9000/products");
    const data = await response.json();
    console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  var mostrarCompra = ingreso ? "d-block" : "d-none"

  return (
    <>
      <h1>Productos</h1>
      <div className="row">
        {
          products.map((product) => (
            <div className="col-md-6 p-2 mt-1" key={product.id}>
              <div className="card">
                <div className="card-header">
                  <h5>{product.titulo}</h5>
                </div>
                <div className="card-body">
                  <img src={product.contenido} />
                </div>
                <div className={"card-header " + mostrarCompra}>
                  <button
                    className="btn btn-warning"
                    onClick={() => console.log(product.id)}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
