import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Signimg from "./Signimg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, confirmPassword, password } = inpval;

    if (name === "") {
      toast.error(" name field is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (confirmPassword === "") {
      toast.error("Password field is required", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is required", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length should be greater than five", {
        position: "top-center",
      });
    } else if (confirmPassword !== password) {
      toast.error("Entered password Mismatch", {
        position: "top-center",
      });
    } else {
      toast.success("User Registration Succesfully");
      history("/login");
      localStorage.setItem("user", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  onChange={getdata}
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">SignIn</NavLink>
              </span>{" "}
            </p>
          </div>
          <Signimg />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signup;
