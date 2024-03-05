import {Router} from 'express';
import {getEmpleado, createEmpleado, deleteEmpleado, updateEmpleado} from '../controllers/empleadosController';


const router = Router();

router.get('/empleados', getEmpleado);

router.post('/empleados', createEmpleado);

router.get('/empleados', deleteEmpleado);

router.get('/empleados', updateEmpleado);

export default router;