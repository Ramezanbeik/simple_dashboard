import { useContext } from "react";
import { userContext } from "../context/AuthContext";
export const useAuth = () => {
  const state = useContext(userContext);
  const isSuccess = state.status === "success";
  const isPending = state.status === "pending";
  const isError = state.status === "error";
  const isAuthenticated = !!state.user;
  const { login, logout, error, user, isUserHasSession } = state;

  return {
    user,
    error,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
    isUserHasSession,
    login,
    logout,
  };
};
