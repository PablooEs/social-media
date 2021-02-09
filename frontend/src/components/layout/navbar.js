import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import Cookies from "universal-cookie";

function Navbar() {
  const cookies = new Cookies();

  return (
    <div>
      <MDBNavbar color="grey darken-4" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Social</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="#">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">Features</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem className="white-text">
            {cookies.get("user").username}
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    </div>
  );
}

export default Navbar;
