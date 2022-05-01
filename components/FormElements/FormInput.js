import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";
import styles from "./FormElements.module.scss";

const FormInput = forwardRef(({ errors, name, label, ...props }, ref) => {
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
});
export default FormInput;
