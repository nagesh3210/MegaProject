import React from "react";
import {useDispatch } from "react-redux";
import authService from "../../appWrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const useDispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      useDispatch(logout());
    });
  };

  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
