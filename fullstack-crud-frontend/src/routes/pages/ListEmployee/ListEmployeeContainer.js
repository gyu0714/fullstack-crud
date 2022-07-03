import React, { useEffect, useState } from 'react';
import ListEmployeePresenter from './ListEmployeePresenter';
import EmployeeApi from '../../../api/EmployeeApi';

const ListEmployeeContainer = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployee();
  }, []);

  const getAllEmployee = () => {
    EmployeeApi.getAllEmployee()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (empno) => {
    EmployeeApi.removeEmployee(empno)
      .then((res) => {
        getAllEmployee();
      })
      .catch((error) => console.log(error));
  };

  return (
    <ListEmployeePresenter
      employees={employees}
      deleteEmployee={deleteEmployee}
    />
  );
};

export default ListEmployeeContainer;
