const Request = require('tedious').Request;

const Connection = require('tedious').Connection;

var config = {
    server: 'ERICKPC',
    authentication: {
        type: 'default',
        options: {
            userName: 'hola',
            password: 'contraseña',   
        }
    },
    options: {
        port: 1433,
        database: 'tarea1',
        trustServerCertificate: true
    },
};

const connection = new Connection(config);

var nombre = nombre

connection.connect();

connection.on('connect', (err) => {
    if (err) {
        console.log(err);
        throw err;
    } 
    executeStatement();
});

function executeStatement() {
    const request = new Request('SELECT * FROM dbo.Empleado', (err, rowCont) => {
        if (err) {
            throw err;
        }
        connection.close();
    });
    request.on('row', (columns) => {
        columns.forEach((column) => {
            console.log(column.value);
        });
    });
    connection.execSql(request);
}
