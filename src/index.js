const app = require('./app');
require('./database');
app.listen(3000);
console.log('Server escuchando por el puerto 3000');