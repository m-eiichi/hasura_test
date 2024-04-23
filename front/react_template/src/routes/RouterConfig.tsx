import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/templates/main_layout";
import { Home } from "@/components/pages/home";

export const RouterConfig: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
