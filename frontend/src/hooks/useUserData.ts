import { useState } from "react";
import { UserData } from "../types/userData";

const loadUserData = () => {
  const userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : null;
};

export function useUserData() {
  const [userData, setUserDataState] = useState<UserData | null>(
    loadUserData()
  );

  const setUserData = (user: UserData) => {
    setUserDataState(user);
    localStorage.setItem("userData", JSON.stringify(user));
    window.location.href = "/";
  };

  const logout = () => {
    setUserDataState(null);
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  return { userData, setUserData, logout };
}
