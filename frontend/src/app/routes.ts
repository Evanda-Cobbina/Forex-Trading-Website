import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { HowItWorks } from "./pages/HowItWorks";
import { GetStarted } from "./pages/GetStarted";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/how-it-works",
    Component: HowItWorks,
  },
  {
    path: "/get-started",
    Component: GetStarted,
  },
]);
