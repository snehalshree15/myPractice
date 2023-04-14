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




