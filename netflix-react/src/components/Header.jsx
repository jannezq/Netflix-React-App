import { Component } from "react";
import { Row, Col, NavDropdown } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <>
        <div>
          <Row className="d-flex">
            <Col>
              <h3>TV Shows</h3>
              <NavDropdown
                title="Avatar"
                id="collasible-nav-dropdown"
                className="dropdown-menu-right"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Header;
