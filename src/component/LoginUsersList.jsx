import clsx from "clsx";
import React, { memo } from "react";
import Button from "./baseComponent/Button";
import { BUTTON_TYPE } from "../constant/buttonConstatn";

const LoginUserList = ({ users, currentUser, onChangeUser }) => {
  const handleClick = (user) =>
    user?.id !== currentUser.id && onChangeUser?.(user);

  return (
    <ul>
      {users?.map((user) => (
        <div
          key={user.id}
          className="d-flex d-flex-justify-between d-flex-align-center"
        >
          <li
            onClick={() => {
              handleClick(user);
            }}
          >
            <div
              className={clsx({
                "login-user-list-selected": currentUser?.id === user.id,
              })}
            >
              <span>{user.firstName}</span>
              <span>{user.lastName}</span>
            </div>
          </li>
          <Button
            type={BUTTON_TYPE.ICON}
            onClick={() => {
              console.log("delete");
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
