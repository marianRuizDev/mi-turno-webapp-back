const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const connectionString = `mongodb+srv://marianruizdev:phH-D_C-NDhGJ5g@myturndb.hwbubon.mongodb.net/MiTurnoDB?retryWrites=true&w=majority`

mongoose.connect(connectionString)
  .then(() => console.log('Conexión a MongoDB establecida'))
  .catch(err => console.log('Error al conectar a MongoDB:', err));

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res)=> {
    res.send("hello world");
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Ha ocurrido un error en el servidor');
  });
  
  // Inicialización del servidor
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`server running on port http://localhost:3001/`));