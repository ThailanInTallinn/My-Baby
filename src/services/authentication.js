import { redirect } from "react-router-dom";

export function isAuthenticated() {
  const session = localStorage.getItem("session");

  if (session) throw redirect("/");

  return null;
}

export function handleVerificationProtected() {
  const session = localStorage.getItem("session");
  if (!session) throw redirect("/signin");
  return null;
}
