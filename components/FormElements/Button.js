import React, { forwardRef } from "react";
import ReactLoading from "react-loading";
import { Button as ButtonInput } from "react-bootstrap";
import styles from "./FormElements.module.scss";

const Button = forwardRef(
  ({ loading, disabled, className, children, ...props }, ref) => {
    return (
      <ButtonInput
        {...props}
        ref={ref}
        disabled={loading || disabled}
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
Button.displayName = "Button";
export default Button;
