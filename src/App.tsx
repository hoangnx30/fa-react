import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserManagementPage from "./pages/Admin/UserManagement";
import { LoginPage } from "./pages/Auth/Login";
import { SignupPage } from "./pages/Auth/Signup";

import { HomePage } from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<LoginPage />}>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        <Route path="admin" element={<UserManagementPage />}>
          <Route index element={<UserManagementPage />} />
          <Route path="user-mamangement" element={<UserManagementPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
