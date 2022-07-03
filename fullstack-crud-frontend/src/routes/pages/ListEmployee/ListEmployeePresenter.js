import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ListEmployeePresenter({ employees, deleteEmployee }) {
  return (
    <div>
      <br />
      <br />
      <h2 className='text-center'>Employee List</h2>
      <Table striped hover bordered variant='dark'>
        <thead>
          <tr>
            <th>사번</th>
            <th>이름</th>
            <th>직업</th>
            <th>사수 사번</th>
            <th>입사일</th>
            <th>연봉</th>
            <th>보너스</th>
            <th>부서번호</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empno}>
              <td>{employee.empno}</td>
              <td>{employee.ename}</td>
              <td>{employee.job}</td>
              <td>{employee.mgr}</td>
              <td>{employee.hiredate}</td>
              <td>{employee.sal}만원</td>
              <td>{employee.comm}</td>
              <td>{employee.deptno}</td>
              <Link className='btn' to={`/edit-emp/${employee.empno}`}>
                수정
              </Link>
              <Button
                variant='outline-dark'
                onClick={() => deleteEmployee(employee.empno)}
              >
                삭제
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ListEmployeePresenter;
