const joi=require("@hapi/joi");
const schema={
    employee:joi.object({
        empname:joi.string().max(25).required(),
        managerid:joi.number().integer().min(10).message("Invalid manager id").required(),
        salary:joi.number().min(1000).message("Enter valid salary").required()

    })
};

module.exports=schema;