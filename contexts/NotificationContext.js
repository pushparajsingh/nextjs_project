import React, { useEffect, useState, createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dismissTime = 3000;
const NotificationContext = createContext();
export function NotificationProvider(props) {
  const dispatch = useDispatch();

  return (
    <>
      <NotificationContext.Provider value={{ Toast: toast }} {...props} />
      <ToastContainer position="top-right" autoClose={dismissTime} />
    </>
  );
}

export function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
}
