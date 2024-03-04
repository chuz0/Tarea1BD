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

// eliminar empleado
export const deleteEmpleado = async (req, res) => {
    const {id} = req.params;
    if (id == null) {
        return res.status(400).json({msg: 'Error!. Llene todos los campos'});
    }

    try {
        const pool = await getConnection()
        await pool.request().input("id", sql.Int, id).query(querys.deleteEmpleado);
        res.json({msg: 'Empleado eliminado correctamente'});
    } catch (error) {     
        res.status(500);
        res.send(error.message);
    }
}

// actualizar empleado
export const updateEmpleado = async (req, res) => {
    const {id} = req.params;
    const {nombre, salario} = req.body;
    if (id == null || nombre == null || salario == null) {
        return res.status(400).json({msg: 'Error!. Llene todos los campos'});
    }

    try {
        const pool = await getConnection()
        await pool.request().input("id", sql.Int, id)
        .input("name", sql.VarChar, nombre)
        .input("salario", sql.Money, salario)
        .query(querys.updateEmpleado);
        res.json({nombre, salario});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}