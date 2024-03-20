import { Route, Routes } from "react-router";
import Layout from "./pages/layout.jsx";
import Dictionary from "./components/dictionary.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/translator" element={<Translator />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
