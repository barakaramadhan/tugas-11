import { createBrowserRouter, Navigate } from "react-router"; // atau "react-router-dom"


import GuestLayout from "./tugas-11/layouts/GuestLayout";
import AuthLayout from "./tugas-11/layouts/AuthLayout";


import HomePage from "./tugas-11/pages/HomePage";
import SignInPage from "./tugas-11/pages/SignInPage";
import SignUpPage from "./tugas-11/pages/SignUpPage";

/* --- DIPOSISI KOMENTAR SEMENTARA JIKA ADMIN ERROR ---
import AdminHome from "./Pages/Admin/AdminHome";
import About from "./Pages/Admin/About";
import SantriList from "./Pages/Admin/Santri/SantriList";
import SantriDetail from "./Pages/Admin/Santri/SantriDetail";
import SantriNilai from "./Pages/Admin/Santri/SantriNilai";
import SantriAbsensi from "./Pages/Admin/Santri/SantriAbsensi";
import AppLayouts from "./layouts/AppLayouts";
import SantriLayout from "./layouts/SantriLayout";
*/

export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },

 
  {
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },

  /* --- ROUTE ADMIN (DIKOMENTARI SEMENTARA) ---
  {
    path: "/admin",
    element: <AppLayouts />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "about", element: <About /> },
      {
        path: "santri",
        element: <SantriLayout />,
        children: [
          { index: true, element: <SantriList /> },
          {
            path: "list",
            children: [
              { index: true, element: <SantriList /> },
              { path: ":santri_id", element: <SantriDetail /> },
            ],
          },
          { path: "nilai", element: <SantriNilai /> },
          { path: "absensi", element: <SantriAbsensi /> },
        ],
      },
    ],
  },
  */

  // FALLBACK REDIRECT
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);