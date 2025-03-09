import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { gitInfo } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     children: [
//       {
//         path: "",
//         element: <Home></Home>,
//       },
//       {
//         path: "about",
//         element: <About></About>,
//       },
//       { path: "contact", element: <Contact></Contact> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="user/:userid" element={<User></User>}></Route>
      <Route 
      loader={gitInfo}
      path="/github" element={<Github></Github>}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
