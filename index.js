const express = require("express")
const app = express()

app.get("/adios", (req, res) => {
  res.send("ruta Adios")
})

app.listen(3000, () => {
  console.log("Server on port 3000");
})