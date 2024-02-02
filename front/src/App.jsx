import { Routes, Route} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/header/HeaderC";
import { EditProfileUser } from "./pages/EditProfileUser";
import { LogInPage } from "./pages/LogInPage";
import { PostComment } from "./pages/PostComment";
import { ProfileUserPage } from "./pages/ProfileUserPage";
import { RecoverPasswordPage } from "./pages/RecoverPasswordPage";
import { RegisterPage } from "./pages/RegisterPage";
import { SingleCommentPage } from "./pages/SingleCommentPage";
import { SupportPage } from "./pages/SupportPage";
import { ErrorPage } from "./pages/ErrorPage";
import './styles/app.css'


export function App() {
  return (
    <>
    <Header />
      <main className="paQueElContenidoEsteDebajoDelHeader">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit-profile/:id" element={<EditProfileUser />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/post-comment/:id" element={<PostComment />} />
          <Route path="/profile-user/:id" element={<ProfileUserPage />} />
          <Route path="/recover-password" element={<RecoverPasswordPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/single-comment/:id" element={<SingleCommentPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>   
    </>
  );
}


