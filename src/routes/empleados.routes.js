import {Router} from 'express';
import {getEmpleado, createEmpleado} from '../controllers/empleadosController';


const router = Router();

router.get('/empleados', getEmpleado);

router.post('/empleados', createEmpleado);

router.get('/empleados', );

router.get('/empleados', );

router.get('/empleados', );

export default router;