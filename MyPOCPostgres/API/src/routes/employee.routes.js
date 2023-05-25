const router = require('express-promise-router')();
const employeeController = require('../controllers/employee.controller');
const { addEmployeeValidation } = require('../../validations/employee/employee.validation');


router.post('/employee',addEmployeeValidation, employeeController.createEmployee);


router.get('/employee',employeeController.getAllEmployee);

router.get('/employee/:id',employeeController.findEmployeeById);

router.put('/employee/:id',employeeController.updateEmployeeById);

router.delete('/employee/:id',employeeController.deleteEmployeeById);

module.exports = router;