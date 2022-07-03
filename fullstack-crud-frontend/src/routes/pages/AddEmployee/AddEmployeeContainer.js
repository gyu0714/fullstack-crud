import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeApi from '../../../api/EmployeeApi';
import AddEmployeePresenter from './AddEmployeePresenter';

const AddEmployeeContainer = () => {
  const [employee, setEmployee] = useState({
    empno: '',
    ename: '',
    job: '',
    mgr: '',
    hiredate: '',
    sal: '',
    comm: '',
    deptno: '',
  });
  const { empno } = useParams();
  const navaigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const saveOrUpdateEmployee = () => {
    if (empno) {
      EmployeeApi.editEmployee(empno, employee)
        .then((res) => {
          navaigate('/all-emp');
        })
        .catch((error) => console.log(error));
    } else {
      EmployeeApi.insertEmployee(employee)
        .then((res) => {
          navaigate('/all-emp');
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    EmployeeApi.getEmployeeByEmpNo(empno)
      .then((res) => {
        setEmployee({
          empno: res.data.empno,
          ename: res.data.ename,
          job: res.data.job,
          mgr: res.data.mgr,
          hiredate: res.data.hiredate,
          sal: res.data.sal,
          comm: res.data.comm,
          deptno: res.data.deptno,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const title = () => {
    if (empno) {
      return <h2 className='text-center'>사원 수정</h2>;
    } else {
      return <h2 className='text-center'>사원 추가</h2>;
    }
  };

  return (
    <AddEmployeePresenter
      saveOrUpdateEmployee={saveOrUpdateEmployee}
      handleChange={handleChange}
      employee={employee}
      title={title}
    />
  );
};

export default AddEmployeeContainer;
