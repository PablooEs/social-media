import React from "react";
import {
  MDBContainer,
  MDBInputGroup,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBtnGroup,
} from "mdbreact";
import "./style.css";

export default function Index() {
  return (
    <>
      <div className="principal">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <h1>Welcome</h1>
            </MDBCol>
            <MDBCol md="6">
              <MDBInputGroup
                material
                containerClassName="mb-3 mt-0"
                prepend="User"
                hint="Username"
              />
              <MDBInputGroup
                material
                containerClassName="mb-3 mt-0"
                prepend="Password"
                hint="Password"
              />
              <MDBBtnGroup size="md" className="mb-4 mr-5">
                <MDBBtn color="primary">Login</MDBBtn>
              </MDBBtnGroup>
              <MDBBtnGroup size="md" className="mb-4">
                <MDBBtn gradient="peach">Register</MDBBtn>
              </MDBBtnGroup>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
