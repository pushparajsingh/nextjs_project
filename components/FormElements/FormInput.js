import React, { forwardRef } from "react";
import ReactLoading from "react-loading";
import { Form, Button as ButtonInput } from "react-bootstrap";
import styles from "./FormElements.module.scss";

export const FormInput = forwardRef(
  ({ errors, name, label, ...props }, ref) => {
    return (
      <div className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          ref={ref}
          name={name}
          className={errors[name] && "is-invalid"}
          {...props}
        />
        {errors && (
          <Form.Control.Feedback type="invalid" style={{ display: "block" }}>
            {errors[name]?.message || errors[name]?.type}
          </Form.Control.Feedback>
        )}
      </div>
    );
  }
);

export const Button = forwardRef(
  ({ loading, className, children, ...props }, ref) => {
    return (
      <ButtonInput
        {...props}
        ref={ref}
        className={`${className} ${styles.buttonElement}`}
      >
        {loading ? (
          <ReactLoading type="spin" color="#fff" height="20px" width="20px" />
        ) : (
          children
        )}
      </ButtonInput>
    );
  }
);
