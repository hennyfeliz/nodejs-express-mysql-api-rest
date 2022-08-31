const express = require('express');
const cors = require('cors');
const app = express();

let corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido al servidor.'
    });
});

require("./routes/viviendas.route.js")(app);
require('./routes/contratos.route.js')(app);
require('./routes/inquilinos.route.js')(app);
require('./routes/propietarios.route.js')(app);


const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
