// getting-started.js (copiado de docs de mongoose)
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://usermm:majada@majadabae.5qbeln1.mongodb.net/test?retryWrites=true&w=majority&appName=MajadaBAE');
    console.log("conectado");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    
    
    // ESQUEMA
    // Define datos para la app
    const kittySchema = new mongoose.Schema({
        name: String
    });
    
    // MODELO
    // Crea una coleccion/tabla 
    const gatitos = mongoose.model('Kittens', kittySchema);
    
    // 
    /*const migato = new gatitos({ name: 'Morgan' }); // migato.name = 'Morgan';*/
    /*console.log(migato.name); // Imprime "Morgan"*/
    
    /*await migato.save(); // insert de mongoose*/

    // FIND/SELECT
    const losgatos = await gatitos.find({name: /^Di/});
    console.log(losgatos);
} 