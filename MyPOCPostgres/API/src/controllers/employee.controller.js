const db=require('../config/database');




exports.createEmployee = async (req, res) => {
    const { empname, managerid,salary } = req.body;
    const { rows } = await db.query(
      "INSERT INTO employee (empname, managerid, salary) VALUES ($1, $2, $3)",
      [empname,managerid,salary]
    );
  
    res.status(201).send({
      message: "Employee added successfully!",
      body: {
        employee: { empname,managerid,salary }
      },
    });
  };

  exports.getAllEmployee=async(req,res)=>{

const response=await db.query("select * from employee order by empid desc");
res.status(200).send(response.rows);

  };

  exports.findEmployeeById=async(req,res)=>{

    const empId=parseInt(req.params.id);
    const response=await db.query('select * from employee where empid=$1',[empId]);
    res.status(200).send(response.rows);
  }

  exports.updateEmployeeById=async(req,res)=>{
    const empId=parseInt(req.params.id);
    const { empname, managerid,salary } = req.body;

    const response=await db.query("update employee set empname=$1,managerid=$2,salary=$3 where empId=$4",[empname,managerid,salary,empId]);
  
    res.status(200).send({message:"Employee updated sucessfully!"});

  };

  exports.deleteEmployeeById=async(req,res)=>{
    const empId=parseInt(req.params.id);
await db.query('delete from employee where empId=$1',[empId]);
res.status(200).send({message:'Employee deleted succuessfully!', empId});
  };


