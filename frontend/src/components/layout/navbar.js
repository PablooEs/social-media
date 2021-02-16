import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";

function Navbar() {
  let user = useSelector((state) => state.login);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  useEffect(() => {
    function getUser() {
      if (!cookies.get("user")) {
        cookies.set("user", user, { path: "/" });
      }
      dispatch(loginSession(cookies.get("user")));
    }
    getUser();
  }, []);

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
            <Link
              to={{
                pathname: "/profile",
                userData: { user: user },
              }}
            >
              {user.username}
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    </div>
  );
}

export default Navbar;
