import React, { forwardRef } from "react";
import ReactLoading from "react-loading";
import { Button as ButtonInput } from "react-bootstrap";
import styles from "./FormElements.module.scss";

const Button = forwardRef(({ loading, className, children, ...props }, ref) => {
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
});
export default Button;
