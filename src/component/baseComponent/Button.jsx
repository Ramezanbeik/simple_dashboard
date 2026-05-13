import { useHistory, Prompt } from "react-router-dom";
import { BUTTON_TYPE } from "../../constant/buttonConstatn";
import { clsx } from "clsx";
import "../../css/button-style.css";
const Button = ({
  shouldBeConfirm = false,
  promptMessage = "Are You Sure Leave This Page?",
  type = BUTTON_TYPE.BACK,
  onClick,
  customClass = null,
  disabled,
  children,
}) => {
  const history = useHistory();
  const handleButton = () => {
    switch (type) {
      case BUTTON_TYPE.BACK:
        history.goBack();
        break;

      default:
        onClick?.();
        break;
    }
  };
  const getTypeButton = () => {
    if (type === BUTTON_TYPE.SUCCESS) return "submit";
    return "button";
  };
  return (
    <>
      <button
        type={getTypeButton()}
        className={clsx("btn", customClass, {
          "btn-outline": type === BUTTON_TYPE.OUTLINE,
          "btn-info": type === BUTTON_TYPE.INFO,
          "btn-success": type === BUTTON_TYPE.SUCCESS,
          "btn-back": type === BUTTON_TYPE.BACK,
          "btn-cancel": type === BUTTON_TYPE.CANCEL,
          "btn-icon": type === BUTTON_TYPE.ICON,
        })}
        onClick={handleButton}
        disabled={disabled}
      >
        {children}
      </button>
      {shouldBeConfirm && type === BUTTON_TYPE.BACK && (
        <Prompt message={promptMessage} />
      )}
    </>
  );
};

export default Button;
