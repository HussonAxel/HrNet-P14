import { Outlet, createRootRoute } from "@tanstack/react-router";

import Header from "../layout/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <Outlet />
    </>
  ),
});
