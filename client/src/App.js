import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBAr from "./components/NavBAr";
import Layout from "./pages/Layout";
import AddPage from "./pages/AddPage";
import Cadastrar from "./components/Cadastrar";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBAr />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/carros" element={<AddPage />} />
            <Route path="/adicionar" element={<Cadastrar />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
