const { Router } = require("express");
const pool = require('../db')
const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM carro");
    console.log(result.rows)
    res.json(result.rows);
  } catch (error) {
    console.log(error.message)
  }
});

router.post('/', async (req, res) => {
  try {
    const { usuario, producto } = req.body;
    const newCompra = await pool.query(
      "INSERT INTO carro (usuario_id, producto_id) VALUES($1, $2) RETURNING *",
      [usuario, producto]
    );
    console.log(newCompra.rows)
    res.json(newCompra.rows[0]);
  } catch (error) {
    console.log(error.message)
  }
});



module.exports = router;