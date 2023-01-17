import React from "react";
import { Navbar, NavDropdown, Form, Nav } from "react-bootstrap";
import logo from "../images/logo.jpeg";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="/">Ceedmy</Navbar.Brand> */}
      <img
        src={logo}
        style={{ height: "70px" }}
        alt="Second slide"
        className="mr-3"
      />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100vh" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="StudyMaterial" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/mpsccontent">NEET</NavDropdown.Item>
              <NavDropdown.Item href="/upsccontent">IIT-JEE</NavDropdown.Item>

              <NavDropdown.Item href="/clatcontent">UPSC</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Scholarship" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/course">Buy a Course</Nav.Link>
            <Nav.Link href="/succes">Succes Stories</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
          </Nav>
          <Form className="d-flex " action="/login">
            <Nav.Link className="btn btn-primary float-right" href="/login">
              Login
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
