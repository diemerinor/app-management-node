const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);  // Ruta con parámetro
router.get('/with-roles/all', userController.getAllUsersWithRoles); // Ruta específica con prefijo
router.get('/', userController.getAllUsers); // Ruta general para obtener todos los usuarios
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
