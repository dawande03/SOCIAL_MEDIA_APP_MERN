import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import Cover_img from "../Cover_Img";
import { userRegister } from '../../redux/action/userAction'
import { useDispatch } from "react-redux";

const Register = () => {
  const [inputVal, setInputVal] = useState({
    username: "",
    password: ""
  })
  const dispatch = useDispatch()
  const [userData, setUserData] = useState([])
  const getData = (event) => {
    const { value, name } = event.target
    setInputVal(() => {
      return {
        ...inputVal, [name]: value
      }
    })
  }

  //onClick addData
  const addData = (event) => {
    event.preventDefault()

    //validation
    const { username, password } = inputVal

    if (username === "") {
      alert("name field is required")
    } else if (username === "") {
      alert("name field is required")
    } else if (password.length < 5) {
      alert('password length is more the or 5')
    }
    else {
      localStorage.setItem("signupUserData", JSON.stringify([...userData,inputVal]))
      console.log("data is succcesfully added")
      alert("Registered")
      setInputVal({
        name: "",
    email: "",
    date: "",
    password: ""
      })
      
    }
    dispatch(userRegister(inputVal))

  }

  return (
    <div className="container">
      <section className="d-flex justify-content-between">
        <div className="left_data" style={{ width: "100%" }}>
          <h3 className="col-lg-8 mt-5 text-center">Sign up</h3>
          <Form>

            
            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
              <Form.Control
                type="text"
                onChange={getData}
                placeholder="Your username"
                name="username"
                value={inputVal.name}
              />

              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
              <Form.Control
                type="password"
                onChange={getData}
                name="password"
                placeholder="Password"
                value={inputVal.password}
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
              <Form.Control
                type="password"
                onChange={getData}
                placeholder="Re enter Password"
                name=""
                value={inputVal.date}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className="mb-3 w-5 col-lg-8 d-flex justify-content-center" onClick={addData}>
              Submit
            </Button>
          </Form>
          <p className="text-left">
            Already have an Account <span><NavLink to="/login">Sign In</NavLink></span>
          </p>
        </div>
        <div>
        </div>
        <div>
//<Cover_img/>
        </div>
      </section>

    </div>
  );
}

export default Register;
