import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { loginSession } from "../../redux/actions/loginActions";
import Cookies from "universal-cookie";

function Navbar() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  dispatch(loginSession(cookies.get("user")));
  let user = useSelector((state) => state.login);
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
          <MDBNavItem className="white-text">{user.username}</MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    </div>
  );
}

export default Navbar;
