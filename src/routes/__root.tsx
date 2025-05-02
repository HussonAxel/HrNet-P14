import { Outlet, createRootRoute } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";

import Header from "../layout/Header";

export const Route = createRootRoute({
  component: () => (
    <HelmetProvider>
      <Header />

      <Outlet />
    </HelmetProvider>
  ),
});
