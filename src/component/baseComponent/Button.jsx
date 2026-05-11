import React from "react";
import { useHistory, Prompt } from "react-router-dom";
import { BUTTON_TYPE } from "../../constant/buttonConstatn";
import { clsx } from "clsx";
import "../../css/button-style.css";
const Button = ({
  caption = "Back To Home",
  shouldBeConfirm = false,
  promptMessage = "Are You Sure Leave This Page?",
  type = BUTTON_TYPE.BACK,
  onClick,
  customClass = null,
  disabled,
}) => {
  const history = useHistory();
  const handleButton = () => {
    switch (type) {
      case BUTTON_TYPE.BACK:
        history.goBack();
        break;
      case BUTTON_TYPE.SUCCESS:
        onClick();
        break;
      default:
        break;
    }
  };
  return (
    <>
      <button
        className={clsx("btn", customClass, {
          "btn-outline": type === BUTTON_TYPE.OUTLINE,
          "btn-info": type === BUTTON_TYPE.INFO,
          "btn-success": type === BUTTON_TYPE.SUCCESS,
          "btn-back": type === BUTTON_TYPE.BACK,
          "btn-cancel": type === BUTTON_TYPE.CANCEL,
        })}
        onClick={handleButton}
        disabled={disabled}
      >
        {caption}
      </button>
      {shouldBeConfirm && type === BUTTON_TYPE.BACK && (
        <Prompt message={promptMessage} />
      )}
    </>
  );
};

export default Button;
