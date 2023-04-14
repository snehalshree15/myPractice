const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');


// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/employee', employeeController.createEmployee);


router.get('/employee',employeeController.getAllEmployee);

module.exports = router;