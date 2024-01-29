import Register from "./pages/Register";
import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";
import FormEditUser from "./components/formEditUser/FormEditUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/recover-password" element={<RecoverPassword />} />
        <Route path="/user/profile/modify" element={<FormEditUser />} />
      </Routes>
    </>
  );
}

export default App;
