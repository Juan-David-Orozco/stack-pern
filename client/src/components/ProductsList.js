import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsList(props) {

  const [products, setProducts] = useState([]);
  const [carro, setCarro] = useState([]);
  const [ingreso, SetIngreso] = useState(props.ingreso)
  const [user, setUser] = useState(props.user)
  
  const navigate = useNavigate();

  const loadProducts = async () => {
    const response = await fetch("http://localhost:9000/products");
    const data = await response.json();
    console.log(data)
    setProducts(data);
  };

  const loadCarro = async () => {
    const response = await fetch("http://localhost:9000/carro");
    const data = await response.json();
    console.log(data)
    setCarro(data);
  }

  useEffect(() => {
    loadProducts();
    loadCarro();
  }, []);

  const agregarCompra = async (product) => {
    //console.log(product)
    const product_id = product.id
    const user_id = user.id
    console.log(product_id, user_id)
    console.log(carro)
    let producto = validarProduct(product_id, user_id)
    if(producto){
      const response = await fetch("http://localhost:9000/carro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
      });
      console.log(response.json())
      await response.json();
    }
  }

  const validarProduct = (productoId, usuarioId) => {
    const producto = carro.find((producto) => {
      return producto.producto_id == productoId && producto.usuario_id == usuarioId
    })
    if(producto){
      console.log("El producto ya se agrego")
      return false
    } else{
      console.log("Agregue productos")
      return true
    }
  }

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
                    //onClick={() => console.log(product.id)}
                    //onClick={() => navigate(`/${product.id}`)}
                    onClick={() => agregarCompra(product)}
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
