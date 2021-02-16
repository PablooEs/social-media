import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Navbar from "./layout/navbar";
import UserPosts from "./profile/userPosts";

function Profile() {
  return (
    <div>
      <Navbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="8" sm="9">
            <UserPosts />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Profile;
