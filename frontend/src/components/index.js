import React, { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
} from "mdbreact";
import { getLogin } from "../adapters/login_adapter";
import "./style.css";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateSession(user, pass) {
    const userData = { params: { username: user, password: pass } };
    getLogin(userData, function (response) {
      if (response) {
        console.log("Logeado");
      } else {
        console.log("Error pibe");
      }
    });
  }

  return (
    <>
      <div className="principal">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <h1>Welcome</h1>
            </MDBCol>
            <MDBCol md="6">
              <form>
                <MDBInput
                  label="Type your username"
                  icon="envelope"
                  group
                  type="username"
                  validate
                  error="wrong"
                  success="right"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
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
                <MDBBtnGroup size="md" className="mb-4">
                  <MDBBtn gradient="peach">Register</MDBBtn>
                </MDBBtnGroup>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}