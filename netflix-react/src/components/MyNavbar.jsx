import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./MyComponentsCss.css";
import logo from "../assests/netflix_logo.png";
import { Link, useLocation } from "react-router-dom";
// import avatar from "../assests/avatar.png";

const MyNav = (props) => {
  // console.log(props);

  const location = useLocation();
  console.log("The location object: ", location);

  return (
    <Navbar id="navigation-bar" collapseOnSelect expand="lg" variant="dark">
      <Link to="/">
        <Navbar.Brand>
          <img id="logo" src={logo} alt="" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <div
              className={
                location.pathname === "/galleryPotter"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </div>
          </Link>
          <Link to="/tv-shows">
            <div
              className={
                location.pathname === "/tv-shows"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              TV Shows
            </div>
          </Link>
          <Link to="/movies">
            <div
              className={
                location.pathname === "/movies" ? "nav-link active" : "nav-link"
              }
            >
              Movies
            </div>
          </Link>
          <Nav.Link href="#pricing">Recently Added</Nav.Link>
          <Nav.Link href="#pricing">My List</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="nav-link active" aria-current="page" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search icon"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Nav.Link>
          <Nav.Link href="#">Kids</Nav.Link>
          <Nav.Link className="nav-link active" aria-current="page" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell-fill icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </Nav.Link>
          <NavDropdown
            title="Avatar"
            id="collasible-nav-dropdown"
            className="dropdown-menu-right"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
