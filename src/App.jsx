import { Route, Routes } from "react-router"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/dashborad" element={<Dashboard/>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  )
}

export default App