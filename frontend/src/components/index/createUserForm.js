import React from "react";
import { MDBBtn, MDBModalFooter } from "mdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import apiService from "../../adapters/index";
import { useForm, Controller } from "react-hook-form";

function CreateUserForm() {
  const { register, handleSubmit, errors, control, reset } = useForm();
  const birthDate = new Date();

  const onSubmit = (data) => {
    const user = {
      first_name: data.first_name,
      family_name: data.family_name,
      date_of_birth: data.date_of_birth,
      username: data.username,
      password: data.password,
    };
    //console.log(user);
    apiService.user.createUser(user).then((response) => {
      if (!response.data.errors) {
        alert("User created succesfully!");
        reset();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grey-text">
        <label>Your name</label>
        <input
          className="form-control"
          type="text"
          name="first_name"
          ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.first_name && <p className="error">Name is required</p>}
        <label className="mt-1">Your last name</label>
        <input
          className="form-control"
          type="text"
          name="family_name"
          ref={register({ required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.family_name && <p className="error">Last name is required</p>}
        <label className="mt-1">Date of birth</label>
        <br />
        <Controller
          name="date_of_birth"
          control={control}
          rules={{ required: true }}
          defaultValue={birthDate}
          render={(props) => (
            <DatePicker
              className="form-control mb-1"
              selected={props.value}
              onChange={(date) => props.onChange(date)}
            />
          )}
        />
        {errors.BirthDate && <p className="error">BirthDate is required</p>}
        <br />
        <label className="mt-1">Your username</label>
        <input
          className="form-control"
          type="text"
          name="username"
          ref={register({ required: true })}
        />
        {errors.username && <p className="error">Username is required</p>}
        <label className="mt-1">Your Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <p className="error">Password is required</p>}
        <MDBModalFooter>
          <MDBBtn color="indigo" type="submit">
            Register
          </MDBBtn>
        </MDBModalFooter>
      </div>
    </form>
  );
}

export default CreateUserForm;
