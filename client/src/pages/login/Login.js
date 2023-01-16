import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import Cover_img from '../Cover_Img';
import { userLogin } from '../../redux/action/userAction'
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()
  const [loginData, setlogData] = useState({
    username: "",
    password: ""
  })
  const getData = (event) => {
    const { name, value } = event.target
    setlogData({ ...loginData, [name]: value })

  }
  const addData = (event) => {
    event.preventDefault();
  
    const { username, password } = loginData
    if (username === "") {
      alert("username is require")
    } else if (password.length < 5) {
      alert("password length not match")
    }
    dispatch(userLogin(loginData))
  }
  return (
    <div>

      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-6" style={{ width: "100%" }}>
            <h3 className="col-lg-8 mt-5 text-center">Login</h3>
            <Form>

              <Form.Group className="mb-3 col-lg-8 mt-3" controlId="formBasicusername">
                <Form.Control type="text" onChange={getData} placeholder="username" name="username" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                <Form.Control type="password" onChange={getData} name="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mb-3 col-lg-8 d-flex justify-content-center" onClick={addData}>
                Submit
              </Button>
              <p className="text-left">
                Create a New Profile <span><Link to='/'>Sign up</Link></span>
              </p>
            </Form>
          </div>
          <Cover_img />
        </section>
      </div>
    </div>
  )
}


export default Login

