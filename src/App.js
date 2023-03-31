import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login/Login"
import NavigationBar from "./components/NavigationBar/NavigationBar"

// User
import FormUbahPassword from "./components/User/FormUbahPassword"


// RL 3.8
import RL38 from "./components/RL38/RL38"
import FormTambahRL38 from "./components/RL38/FormTambahRL38"
import { FormEditRL38 } from "./components/RL38/FormUbahRL38"

// RL 4a
import RL4A from "./components/RL4A/RL4A"
import FormTambahRL4a from "./components/RL4A/FormTambahRL4A"
import { FormUbahRL4A } from "./components/RL4A/FormUbahRL4A"

// RL 4a sebab
import RL4ASebab from "./components/RL4ASebab/RL4ASebab"
import FormTambahRL4ASebab from "./components/RL4ASebab/FormTambahRL4ASebab"
import { FormUbahRL4ASebab } from "./components/RL4ASebab/FormUbahRL4ASebab"

function App() {
  return (
    <BrowserRouter basename={''}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="admin/beranda" element={<><NavigationBar /></>} />
        <Route path="/user/ubahpassword" element={<><NavigationBar /><FormUbahPassword /></>} />

        <Route path="admin/rl38" element={<><NavigationBar /><RL38 /></>} />
        <Route path="admin/rl4a" element={<><NavigationBar /><RL4A /></>} />
        <Route path="admin/rl4asebab" element={<><NavigationBar /><RL4ASebab /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
