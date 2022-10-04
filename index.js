const express = require("express");
const app = express();

app.get("/hola", (req, res) => {
  res.send("ruta Hola");
});

app.get("/registro", (req, res) => {
  res.send("ruta de registro");
});

app.get("/adios", (req, res) => {
  res.json({ message: "No es una despedida, solamente es un adiós" })
});


app.get("/registro", (req, res) => {
  res.json({ message: "Ruta de información de registro" })
});

app.post("/login", (req, res) => {
  res.json({ message: "Ruta nueva para el login" });
});

app.get("/api/food", (req, res) => {
  res.json({ message: "API Food" })
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
