const express = require("express");
const app = express();

app.get("/hola", (req, res) => {
  res.send("ruta Hola");
});
<<<<<<< HEAD
<<<<<<< HEAD

app.get("/registro", (req, res) => {
  res.send("ruta de registro");
});
=======
>>>>>>> nuevaRutaRegistro
=======
>>>>>>> nuevaRutaLogin

app.get("/adios", (req, res) => {
  res.send("ruta Adios");
});
<<<<<<< HEAD
<<<<<<< HEAD
=======

app.get("/registro", (req, res) => {
  res.send("ruta Adios");
});
>>>>>>> nuevaRutaRegistro
=======

app.post("/login", (req, res) => {
  res.send("Ruta de login nueva");
});
>>>>>>> nuevaRutaLogin

app.listen(3000, () => {
  console.log("Server on port 3000");
});
