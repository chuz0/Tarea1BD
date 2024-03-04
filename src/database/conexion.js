import sql from 'mssql';

const dbsettings = {
    user: 'hola',
    password: 'password',
    server: 'DESKTOP-HUTR52P',
    database: 'tarea1',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

export async function getConnection() {
    try {     
        const pool = await sql.connect(dbsettings);
        return pool;
    }catch (error) {
        console.error(error);
    }
}

export {sql};