import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faUser } from "@fortawesome/free-solid-svg-icons"


export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
      Imagekit.io Drive
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/user">
        <FontAwesomeIcon icon={faUser} className="mr-2" />
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
