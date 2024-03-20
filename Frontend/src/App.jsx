import { Route, Routes } from "react-router";
import Layout from "./pages/layout.jsx";
import Translator from "./components/translator.jsx";
import Dictionary from "./components/dictionary.jsx";
import Register from "./pages/register.jsx";

import Login from "./pages/login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Register />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/translator" element={<Translator />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
