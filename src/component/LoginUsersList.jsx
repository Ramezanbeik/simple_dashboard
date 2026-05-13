import clsx from "clsx";
import { memo } from "react";
import Button from "./baseComponent/Button";
import { BUTTON_TYPE } from "../constant/buttonConstatn";
import Image from "./baseComponent/Image";
import { PROFILE } from "../constant/imageConstant";

const LoginUserList = ({ users, currentUser, onChangeUser, OnDeleteUser }) => {
  const handleOnChangeUserClick = (user) =>
    user?.id !== currentUser.id && onChangeUser?.(user);
  const handleOnDeleteClick = (user) => {
    OnDeleteUser?.(user);
  };
  return (
    <ul>
      {users?.map((user) => (
        <div
          key={user.id}
          className="d-flex d-flex-justify-between d-flex-align-center"
        >
          <li
            onClick={() => {
              handleOnChangeUserClick(user);
            }}
          >
            <div
              className={clsx({
                "login-user-list-selected": currentUser?.id === user.id,
              })}
            >
              <div className="d-flex d-flex-align-anchor-center">
                <Image
                  typeImage={PROFILE}
                  alt={user?.userName}
                  src={user?.image}
                  warperCustomeClass={"mr-r"}
                />
                <span>{user.firstName}</span>
                <span>{user.lastName}</span>
              </div>
            </div>
          </li>
          <Button
            type={BUTTON_TYPE.ICON}
            onClick={() => {
              handleOnDeleteClick(user);
            }}
            customClass="error-message"
          >
            <i className="fa fa-trash" />
          </Button>
        </div>
      ))}
    </ul>
  );
};
export default memo(LoginUserList);
