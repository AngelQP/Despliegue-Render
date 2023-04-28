require('dotenv').config();
const express = require('express');
const hbs = require('hbs')

const app = express();
const PORT = process.env.PORT;

// Uso de hanldebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// Servir contenido estatico - Esto es un middleware
app.use(express.static('public/angular-app'));

/* Esto ya no se ejecuta porque tiene la carpeta public */
/* app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Angel',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Angel',
    titulo: 'Curso de Node'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Angel',
    titulo: 'Curso de Node'
  })
}) */

app.get('*', (req, res) => {
  // res.send('404 | Not found');
  res.sendFile(__dirname + '/public/angular-app/index.html')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})