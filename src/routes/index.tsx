import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages";
import Ecommerce from "../pages/ecommerce";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/ecommerce" element={<Ecommerce />} />
    </Routes>
  );
}
