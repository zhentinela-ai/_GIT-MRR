const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/hola", (req, res) => {
  res.send("ruta Hola");
});
<<<<<<< HEAD

app.get("/registro", (req, res) => {
  res.send("ruta de registro");
});
=======
>>>>>>> nuevaRutaRegistro

app.get("/adios", (req, res) => {
  res.send("ruta Adios");
});
<<<<<<< HEAD
=======

app.get("/registro", (req, res) => {
  res.send("ruta Adios");
});
>>>>>>> nuevaRutaRegistro

app.listen(3000, () => {
  console.log("Server on port 3000");
});
