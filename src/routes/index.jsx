import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import Form from "../views/Form";
import Settings from "../views/Settings";
import SignIn from "../views/Signin";
import SignUp from "../views/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes path="/">
      <Route index element={<Home />} />
      <Route path="settings" element={<Settings />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  )
);

const index = () => {
  return <RouterProvider router={router} />;
};

export default index;
