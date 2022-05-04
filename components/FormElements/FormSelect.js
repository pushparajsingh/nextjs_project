import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";

const FormSelect = forwardRef(
  ({ errors, name, label, options, ...props }, ref) => {
    const { control } = useForm();
    return (
      <div className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Controller
          //   ref={ref}
          {...props}
          name={name}
          control={control}
          render={({ field }) => (
            <Form.Select
              {...field}
              onChange={field.onChange}
              className={errors[name] && "is-invalid"}
              value={field.value}
            >
              {options?.map((option, index) => {
                return (
                  <option key={index} value={option.value}>
                    {option.text}
                  </option>
                );
              })}
            </Form.Select>
          )}
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
FormSelect.displayName = "FormSelect";
export default FormSelect;
