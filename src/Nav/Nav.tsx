import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/src/components/heart.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Sarah's React Page
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;