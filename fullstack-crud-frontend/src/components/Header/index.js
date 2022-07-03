import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>사원 관리</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/all-emp'>사원 목록</Nav.Link>
            <Nav.Link href='/add-emp'>사원 등록</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
