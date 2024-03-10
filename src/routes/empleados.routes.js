import {Router} from 'express';
import {getEmpleado, createEmpleado, deleteEmpleado, updateEmpleado} from '../controllers/empleadosController';


const router = Router();

router.get('/empleados', getEmpleado);

router.post('/empleados', createEmpleado);

router.delete('/empleados', deleteEmpleado);

router.put('/empleados', updateEmpleado);

export default router;