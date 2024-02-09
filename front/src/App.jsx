import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/header/HeaderC";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { RecoverPasswordPage } from "./pages/RecoverPasswordPage";
import { NewPasswordPage } from "./pages/NewPasswordPage";
import { EditProfileUser } from "./pages/EditProfileUser";
import { PostComment } from "./pages/PostComment";
import { ProfileUserPage } from "./pages/ProfileUserPage";
import { SingleCommentPage } from "./pages/SingleCommentPage";
import { SupportPage } from "./pages/SupportPage";
import { ErrorPage } from "./pages/ErrorPage";
import { ValidateCodePage } from "./pages/ValidateCodePage";
import "./styles/app.css";

export function App() {
  return (
    <>
      <Header />
      <main className="paQueElContenidoEsteDebajoDelHeader">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/register" element={<RegisterPage />} />
          <Route
            path="/users/validate/:registrationCode"
            element={<ValidateCodePage />}
          />
          <Route path="/users/login" element={<LoginPage />} />
          <Route
            path="/users/password/recover"
            element={<RecoverPasswordPage />}
          />
          <Route path="/users/password" element={<NewPasswordPage />} />
          <Route path="/edit-profile/:id" element={<EditProfileUser />} />
          <Route path="/post-comment/:id" element={<PostComment />} />
          <Route path="/profile-user/:id" element={<ProfileUserPage />} />
          <Route path="/single-comment/:id" element={<SingleCommentPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
