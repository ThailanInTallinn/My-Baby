import { redirect } from "react-router-dom";

export function isAuthenticated() {
  const token = localStorage.getItem("token");

  if (token) {
    throw redirect("/");
  }
  return null;
}

export function handleVerificationProtected() {
  const token = localStorage.getItem("token");
  if (!token) {
    throw redirect("/signin");
  }
  return null;
}
