import React, { useEffect, useState } from "react";
import "../../css/input-style.css";
const Input = ({
  id,
  initValue,
  onChange,
  onBlure,
  label,
  type = "text",
  placeHolder = "",
  autoComplete = "off",
  containerClassName = "input-container",
  labelClassName = "input-label",
  inputClassName = "input",
  required = false,
  readOnly = false,
  disabled = false,
  autoFocus = false,
  isRequired = null,
}) => {
  const [inputValue, setInputValue] = useState(initValue);
  useEffect(() => {
    setInputValue(initValue);
  }, [initValue]);
  return (
    <div className={containerClassName}>
      <label htmlFor={id} className={labelClassName}>
        {isRequired ? (
          <>
            <span className="input-label-required">*</span> {label}
          </>
        ) : (
          label
        )}
      </label>
      <input
        autoFocus={autoFocus}
        id={id}
        type={type}
        readOnly={readOnly}
        disabled={disabled}
        className={inputClassName}
        placeholder={placeHolder}
        autoComplete={autoComplete}
        required={required}
        value={inputValue ?? {}}
        onChange={(event) => {
          const { value } = event.target;
          setInputValue(value);
          if (initValue !== inputValue) onChange?.();
        }}
        onBlur={(event) => {
          if (initValue !== inputValue) onBlure?.(event);
        }}
      />
    </div>
  );
};
export default Input;
