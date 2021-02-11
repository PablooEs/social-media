import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
  MDBTypography,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
} from "mdbreact";
import { getLogin } from "../adapters/login_adapter";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { loginSession } from "../redux/actions/loginActions";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import CreateUserForm from "./index/createUserForm";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const cookies = new Cookies();
  let [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  function validateSession(user, pass) {
    if (String(user).length === 0 || String(pass).length === 0) {
      setError("Complete both fields!");
    } else {
      const userData = { username: user, password: pass };
      getLogin(userData, function (response) {
        if (response.authenticated === true) {
          dispatch(loginSession(response.user));
          history.push("/home");
          cookies.set("user", response.user);
        }
        setError("The user or password are incorrent");
      });
    }
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
                className="login"
                label="Type your username"
                icon="user"
                iconClass="title"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                className="login"
                label="Type your password"
                icon="lock"
                iconClass="title"
                group
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <div className="text-center error">{error}</div>}
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
                <MDBBtn onClick={toggle} color="elegant">
                  Register
                </MDBBtn>
              </MDBBtnGroup>
              <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>Register</MDBModalHeader>
                <MDBModalBody>
                  <CreateUserForm toggle={modal} />
                </MDBModalBody>
              </MDBModal>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
