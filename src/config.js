import { config } from 'dotenv';
config();

export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.db_User || '',
    dbPassword: process.env.db_Password || '',
    dbServer: process.env.db_Server || '',
    dbDatabase: process.env.db_Database || '',
};