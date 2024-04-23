import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

import { MainLayoutContent } from "@/components/templates/main_layout/main_layout_content";

export const MainLayout = (): ReactElement => {
  return (
    <MainLayoutContent>
      <Outlet />
    </MainLayoutContent>
  );
};
