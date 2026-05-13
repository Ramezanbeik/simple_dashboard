import clsx from "clsx";
import "../../css/image-style.css";
import { PROFILE } from "../../constant/imageConstant";
const Image = ({
  src = "./image/user-template.jpg",
  alt = "image",
  typeImage,
  onClick,
  containerCustomeClass,
  warperCustomeClass,
}) => {
  const handleOnCclick = () => onClick?.();
  return (
    <div
      className={clsx(warperCustomeClass, {
        "image-wraper": typeImage === PROFILE,
      })}
    >
      <img
        className={clsx(
          {
            "image-container-profile": typeImage === PROFILE,
          },
          containerCustomeClass,
        )}
        src={src ?? "./image/user-template.jpg"}
        alt={alt}
        onClick={() => {
          handleOnCclick();
        }}
      />
    </div>
  );
};
export default Image;
