const express = require("express");
const app = express();

app.get("/hola", (req, res) => {
  res.send("ruta Hola");
});

app.get("/registro", (req, res) => {
  res.send("ruta de registro");
});

app.get("/adios", (req, res) => {
  res.send("ruta Adios");
});

app.get("/registro", (req, res) => {
  res.send("ruta Adios");
});

app.post("/login", (req, res) => {
  res.send("Ruta de login nueva");
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
