import express from 'express';
import config from './config';
import empleadosRoutes from './routes/empleados.routes';
const app = express();
//settings
app.set('port', config.port|| 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(empleadosRoutes);

export default app;