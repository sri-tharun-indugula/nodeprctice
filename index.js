const express = require('express')
const cors=require('cors')
const app = express()
const os = require('node:os');
const products=require("./products.json")
app.get('/products', function (req, res) {
  const newProducts=JSON.stringify(products)
  res.send(`${newProducts}`)
})
app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000)