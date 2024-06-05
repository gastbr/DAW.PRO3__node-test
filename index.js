const express = require('express'); // include
const app = express(); // crea el objeto app (servidor web), como el "new" (pero no hace falta)
const port = 3000; //

// arranca el servidor

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

// para que funcione el post
app.use(express.urlencoded({ extended: true }));

// RUTAS O ENDPOINTS

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/saluda', (req, res) => {
    // console.log(req.query);
    res.send("Hola");
});

app.get('/saluda/:nombre', (req, res) => {
    let nombre = req.params.nombre;
    res.send('Hola, ' + nombre);
});

app.post('/checklogin', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username == 'admin' && password == '1234') {
        res.send("Login ok");
    } else {
        res.send("Login no");
    }
});