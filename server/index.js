require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const pc = require('./controllers/products_controller');
const {SERVER_PORT} = process.env;
app.use(express.json());

massive(process.env.CONNECTION_STRING).then(db => {
   app.set('db', db);
   console.log('Database is hooked up');
}).catch(error => console.log(error));

app.use(express.json());

app.get('/api/products', pc.getAll);
app.get('/api/products/:id', pc.getOne);
app.post('/api/products', pc.create);
app.put('/api/products/:id?desc=...', pc.update);
app.delete('/api/products/:id', pc.delete);





app.listen(SERVER_PORT, ()=> console.log(`Listening to chill beats on ${SERVER_PORT} fm`));
