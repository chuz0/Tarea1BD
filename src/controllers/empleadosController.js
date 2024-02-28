import {getConnection, sql, querys} from '../database';

export const getEmpleado = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(querys.getAllEmpleados);
        res.json(result.recordset);
    }catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createEmpleado = async (req, res) => {
    
    const {nombre, salario} = req.body;

    if (nombre == null || salario == null) {
        return res.status(400).json({msg: 'Error!. Llene todos los campos'});
    }

    try {
        const pool = await getConnection()
        await pool.request().input("name", sql.VarChar, nombre)
        .input("salario", sql.Money, salario)
        .query(querys.createEmpleado);
    
        res.json({nombre, salario});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}