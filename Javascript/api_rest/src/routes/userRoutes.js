import { Router } from 'express';
import userController from '../controllers/UserController'; // importamos com letra minúscula, pois aqui estamos importando uma class já instanciada

const router = new Router();

router.post('/', userController.store);

export default router;

/*
    MÉTODOS DE CONTROLLER
    index -> lista todos os usuários (GET)
    store/create -> cria um novo usuário (POST)
    delete -> apaga o usuário (DELETE)
    show: mostra um usuário (GET)
    update: atualiza um usuario (PATCH ou PUT)
*/
