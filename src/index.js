const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//Enrutadores
const rutasUsers = require('./routes/users')
const rutasProducts = require('./routes/products')

const app = express();

// settings
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use('/products', rutasProducts);
app.use('/users', rutasUsers);

// ruta inicial
app.get('/', (req, res) => {
  res.send("Bienvenido al Servidor")
})

// conexión servidor
app.listen(9000, function(){
  console.log("Servidor iniciado port 9000");
})