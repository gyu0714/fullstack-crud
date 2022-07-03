import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const AddEmployeePresenter = ({
  saveOrUpdateEmployee,
  employee,
  title,
  handleChange,
}) => {
  return (
    <div>
      <br />
      <br />
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            {title()}
            <div className='card-body'>
              <form method='post'>
                <div className='form-group mb-2'>
                  <label className='form-label'> 사번</label>
                  <input
                    type='number'
                    placeholder='Ex) 7777'
                    name='empno'
                    className='form-control'
                    value={employee.empno}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>이름</label>
                  <input
                    type='text'
                    placeholder='name'
                    name='ename'
                    className='form-control'
                    value={employee.ename}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>직업</label>
                  <input
                    type='text'
                    placeholder='job'
                    name='job'
                    className='form-control'
                    value={employee.job}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>사수 사번</label>
                  <input
                    type='number'
                    placeholder='Ex) 7369'
                    name='mgr'
                    className='form-control'
                    value={employee.mgr}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>입사일자</label>
                  <input
                    type='date'
                    name='hiredate'
                    className='form-control'
                    value={employee.hiredate}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>연봉</label>
                  <input
                    type='text'
                    placeholder='sal'
                    name='sal'
                    className='form-control'
                    value={employee.sal}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>보너스</label>
                  <input
                    type='text'
                    placeholder='comm'
                    name='comm'
                    className='form-control'
                    value={employee.comm}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>부서 번호</label>
                  <Form.Select name='deptno' onChange={handleChange}>
                    <option>부서 선택</option>
                    <option value={10}>ACCOUNTING</option>
                    <option value={20}>RESEARCH</option>
                    <option value={30}>SALES</option>
                    <option value={40}>OPERATIONS</option>
                    <option value={50}>BACKEND</option>
                  </Form.Select>
                </div>

                <button
                  className='btn btn-success'
                  onClick={() => saveOrUpdateEmployee}
                >
                  저장
                </button>
                <Link to='/all-emp' className='btn btn-danger'>
                  취소
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeePresenter;
