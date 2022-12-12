import { Router } from 'express';
import homeController from '../controllers/HomeController'; // importamos com letra minúscula, pois aqui estamos importando uma class já instanciada

const router = new Router();

router.get('/', homeController.index);

export default router;
