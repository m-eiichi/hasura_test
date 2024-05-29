import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/templates/main_layout";
import { Home } from "@/components/pages/home";
import { Country } from "@/components/pages/country";

export const RouterConfig: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="country" element={<Country />} />
        </Route>
      </Routes>
    </>
  );
};
