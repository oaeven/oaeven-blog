import React from "react"
import { Nav, Navbar } from "react-bootstrap"

import "./../css/site.css"

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="container">
                <Navbar.Brand href="/" style={{display: "flex", alignItems: "center"}}><i className="material-icons-outlined pr-1">home</i> oaevensen.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/blog/" style={{display: "flex", alignItems: "center"}}><i className="material-icons-outlined pr-1">menu_book</i> Blog</Nav.Link>
                        <Nav.Link href="/projects/" style={{display: "flex", alignItems: "center"}}><i className="material-icons-outlined pr-1">memory</i> Projects</Nav.Link>
                        <Nav.Link href="/about/" style={{display: "flex", alignItems: "center"}}><i className="material-icons-outlined pr-1">info</i> About</Nav.Link>
                        <Nav.Link href="/contact/" style={{display: "flex", alignItems: "center"}}><i className="material-icons-outlined pr-1">email</i> Contact</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;