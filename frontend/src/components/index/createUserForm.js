import React, { useState } from "react";
import { MDBBtn, MDBModalFooter } from "mdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import apiService from "../../adapters/index";

function CreateUserForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function createUser(name, lstname, date, username, pass) {
    const user = {
      first_name: name,
      family_name: lstname,
      date_of_birth: date,
      username: username,
      password: pass,
    };
    apiService.user.createUser(user);
  }

  return (
    <form>
      <div className="grey-text">
        <label>Your name</label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="mt-1">Your last name</label>
        <input
          className="form-control"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="mt-1">Date of birth</label>
        <br />
        <DatePicker
          className="form-control mb-1"
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
        />
        <br />
        <label className="mt-1">Your username</label>
        <input
          className="form-control"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="mt-1">Your Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MDBModalFooter>
          <MDBBtn
            color="indigo"
            onClick={() => {
              createUser(name, lastName, birthDate, username, password);
            }}
          >
            Register
          </MDBBtn>
        </MDBModalFooter>
      </div>
    </form>
  );
}

export default CreateUserForm;
