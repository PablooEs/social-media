import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
  MDBTypography,
} from "mdbreact";
import { getLogin } from "../adapters/login_adapter";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { loginSession } from "../redux/actions/loginActions";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  document.cookie = useSelector((state) => state.login._id);
  const history = useHistory();
  const cookies = new Cookies();

  function validateSession(user, pass) {
    const userData = { username: user, password: pass };
    getLogin(userData, function (response) {
      if (response.authenticated === true) {
        dispatch(loginSession(response));
        history.push("/home");
        cookies.set("user", response.user);
      }
      console.log("something else");
    });
  }

  return (
    <div className="bg">
      <div className="principal">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="5" className="mr-4">
              <MDBTypography
                tag="h2"
                variant="display-2"
                className="title text-center"
              >
                Welcome
              </MDBTypography>
              <br />
              <MDBTypography tag="h4" className="title text-center">
                to the social-media web
              </MDBTypography>
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                label="Type your username"
                icon="user"
                iconClass="title"
                validate
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                iconClass="title"
                group
                type="password"
                validate
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBBtnGroup size="md" className="mb-4 mr-5">
                <MDBBtn
                  color="primary"
                  onClick={() => {
                    validateSession(username, password);
                  }}
                >
                  Login
                </MDBBtn>
              </MDBBtnGroup>
              <MDBBtnGroup size="md" className="float-right">
                <MDBBtn color="elegant">Register</MDBBtn>
              </MDBBtnGroup>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
