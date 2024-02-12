import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/header/HeaderC";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { RecoverPasswordPage } from "./pages/RecoverPasswordPage";
import { NewPasswordPage } from "./pages/NewPasswordPage";
import { ProfileUserPage } from "./pages/ProfileUserPage";
import { EditUserPage } from "./pages/EditUserPage";
import { NewCommentPage } from "./pages/NewCommentPage";
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
          <Route path="/users" element={<ProfileUserPage />}>
            <Route path="/users/edit" element={<EditUserPage />} />
          </Route>
          <Route path="/comment" element={<NewCommentPage />} />
          <Route path="/comment/:id" element={<SingleCommentPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
