const { Router } = require("express");
const pool = require('../db')
const router = Router();

router.get('/', async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM producto");
    console.log(allProducts.rows)
    res.json(allProducts.rows);
  } catch (error) {
    console.log(error.message)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM producto WHERE id = $1", [id]);
    if (result.rows.length === 0)
      return res.status(404).json({ message: "Product not found" });
    console.log(result.rows[0])
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message)
  }
});

module.exports = router;