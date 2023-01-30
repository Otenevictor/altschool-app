import {Container, Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="positioning" bg="light" variant="gold" expand="lg">
        <Container>
          <Navbar.Brand style={ { color: "green"}} href="/">ASOV@DEV</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <NavLink style={ { color: "blue"}
          }  to="/">Home</NavLink>
            <NavLink style={ { color: "blue"}
          }  to="/counter1">Counter1</NavLink>
            <NavLink style={ { color: "blue"}
          }  to="/counter2">Counter2</NavLink>
            <NavLink style={ { color: "blue"}
          }  to="/error">TestErrorPage</NavLink>
            <NavLink style={ { color: "blue"}
          }  to="*">404</NavLink>

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;