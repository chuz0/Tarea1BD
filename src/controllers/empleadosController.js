import {getConnection, sql} from '../database/conexion';

export const getEmpleado = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM Empleado');
    console.log(res);
    res.json(result.recordset);
}

export const createEmpleado = async (req, res) => {
    
    const {nombre, salario} = req.body;

    if (nombre == null || salario == null) {
        return res.status(400).json({msg: 'Error!. Llene todos los campos'});
    }

    const pool = await getConnection()
    await pool.request().input("name", sql.VarChar, nombre).input("salario", sql.Money, salario).query('INSERT INTO Empleado (nombre, salario) VALUES (@name, @salario)');
    
    res.json('creating empleado');
}