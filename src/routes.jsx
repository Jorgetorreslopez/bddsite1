import { Home, Profile, SignIn} from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About Us",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Services",
    path: "/sign-in",
    element: <SignIn />,
  }
];

export default routes;
