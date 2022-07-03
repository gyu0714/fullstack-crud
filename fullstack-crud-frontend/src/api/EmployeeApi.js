import axios from 'axios';

const EMPLOYEE_API_BASE_URL = '/api';

class EmployeeApi {
  getAllEmployee = () => {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/all-emp`);
  };

  getEmployeeByEmpNo = (empno) => {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/emp/${empno}`);
  };

  insertEmployee = (employee) => {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/add-emp`, employee);
  };

  editEmployee = (empno, employee) => {
    return axios({
      method: 'put',
      url: `${EMPLOYEE_API_BASE_URL}/${empno}`,
      data: {
        empno: employee.empno,
        ename: employee.ename,
        job: employee.job,
        mgr: employee.mgr,
        hiredate: employee.hiredate,
        sal: employee.sal,
        comm: employee.comm,
        deptno: employee.deptno,
      },
    });
  };

  removeEmployee = (empno) => {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/empno`);
  };
}

export default new EmployeeApi();
