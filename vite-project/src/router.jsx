import { createBrowserRouter, Navigate } from "react-router";

// --- IMPORT LAYOUTS (Sesuai struktur folder gambar) ---
import GuestLayout from "./Tugas-11/Layouts/GuestLayout";
import AuthLayout from "./Tugas-11/Layouts/AuthLayout";
import AdminLayout from "./Tugas-11/Layouts/AdminLayout";
import UserLayout from "./Tugas-11/Layouts/UserLayout";

// --- IMPORT PAGES (Sesuai struktur folder gambar) ---
// HomePage ada di dalam folder User
import HomePage from "./Tugas-11/Pages/User/HomePage"; 

import SignInPage from "./Tugas-11/Pages/Auth/SignInPage";
import SignUpPage from "./Tugas-11/Pages/Auth/SignUpPage";

import UserHome from "./Tugas-11/Pages/User/UserHome";
import MyProfile from "./Tugas-11/Pages/User/MyProfile";

// import AdminHome from "./Tugas-11/Pages/Admin/AdminHome"; 
// DIKOMENTAR KARENA FILE BELUM ADA. Jika sudah dibuat, hapus tanda komentar ini.

export const router = createBrowserRouter([
  // ROUTE GUEST (Public)
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

  // ROUTE AUTH (Login & Register)
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

  // ROUTE ADMIN BARU
  // Sementara kita komentar dulu agar tidak error saat build di Vercel
  /*
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        // element: <AdminHome />, 
      },
    ],
  },
  */

  // ROUTE USER
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: "myprofile",
        element: <MyProfile />,
      },
    ],
  },

  // FALLBACK REDIRECT (404)
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);