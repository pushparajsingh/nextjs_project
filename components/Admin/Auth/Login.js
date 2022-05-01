import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormInput from "../../FormElements/FormInput";
import { useForm } from "react-hook-form";
import styles from "./Auth.module.scss";
import { emailPattern } from "../../../constants";
import { useNotification } from "../../../contexts/NotificationContext";
import { authLogin } from "../../../redux/Auth/Auth.action";

const Login = () => {
  const dispatch = useDispatch();
  const { Toast } = useNotification();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { allStates } = useSelector((state) => ({
    allStates: state,
  }));

  const onSubmit = (data) => {
    if (data.email === "admin@gmail.com" && data.password === "admin") {
      dispatch(authLogin(data));
    } else {
      Toast.error("Invalid credentials.");
      return null;
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <h1 className="mb-5 text-center">Login</h1>
      <Row>
        <Col lg={12}>
          <FormInput
            label="Email"
            name="email"
            placeholder="me@gmail.com"
            {...register("email", {
              required: true,
              pattern: {
                value: emailPattern,
                message: "Email should be in valid format.",
              },
            })}
            errors={errors}
          />
        </Col>
        <Col lg={12}>
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="password"
            {...register("password", {
              required: true,
            })}
            errors={errors}
          />
        </Col>
        <Col lg={12} className="text-center">
          <Button type="submit" className="themeButton btn btn-primary mt-2">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default Login;
