import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de PDI' });
});

// Rutas para la entidad "productos"
app.get('/productos', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta GET de mi entidad productos' });
});

app.post('/productos', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta POST de mi entidad productos' });
});

app.put('/productos/:id', (req, res) => {
  res.json({ mensaje: `Esta es la ruta PUT de mi entidad productos para el id ${req.params.id}` });
});

app.delete('/productos/:id', (req, res) => {
  res.json({ mensaje: `Esta es la ruta DELETE de mi entidad productos para el id ${req.params.id}` });
});

// Iniciar server
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
