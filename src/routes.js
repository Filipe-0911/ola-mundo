import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu/indes";
import Rodape from "componentes/Rodape";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<SobreMim/>}/>
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  );
}
