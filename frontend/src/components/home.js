import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Navbar from "./layout/navbar";
import CreatePost from "./home/createPost";
import ViewPosts from "./home/viewPosts";

function Home() {
  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="8" sm="9">
            <CreatePost />
            <ViewPosts />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Home;
