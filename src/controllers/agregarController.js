const controller = {};

const connection = require('../../app');

controller.list = (req, res) => {
    connection.on('connect', (err) => {
        if (err) {
            console.log(err);
            throw err;
        } 
        console.log('Conectado a la base de datos');
    });
};



module.exports = controller;