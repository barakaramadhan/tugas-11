import { createBrowserRouter, Navigate } from "react-router"; // Jika pakai react-router v7, ini sudah benar. Jika v6, gunakan "react-router-dom"

// --- IMPORT YANG AKTIF ---

// Guest & Auth Layouts
import GuestLayout from "./Tugas-11/Layouts/GuestLayout";
import AuthLayout from "./Tugas-11/Layouts/AuthLayout"; // PERBAIKAN: Menggunakan AuthLayout, bukan GuestLayout
import HomePage from "./Tugas-11/Pages/HomePage"; // PERBAIKAN: Menggunakan Pages/HomePage, bukan Layouts/GuestLayout

// Auth Pages
import SignInPage from "./Tugas-11/Pages/Auth/SignInPage";
import SignUpPage from "./Tugas-11/Pages/Auth/SignUpPage";

// Admin Baru
import AdminLayout from "./Tugas-11/Layouts/AdminLayout";
import AdminHome from "./Tugas-11/Pages/Admin/AdminHome"; // PERBAIKAN: Disamakan menjadi Tugas-11/Pages/Admin/...

// User
import UserLayout from "./Tugas-11/Layouts/UserLayout";
import UserHome from "./Tugas-11/Pages/User/UserHome";
import MyProfile from "./Tugas-11/Pages/User/MyProfile";


/* 
   --- IMPORT ADMIN LAMA (DIKOMENTAR AGAR TIDAK MEMBLOKIR BUILD) ---
   Jika nanti ingin dipakai lagi, hapung tanda komentar dan pastikan path foldernya benar (Tugas-11/Pages/...)
*/

// import About from "./Tugas-11/Pages/Admin/About";
// import SantriList from "./Tugas-11/Pages/Admin/Santri/SantriList";
// import SantriDetail from "./Tugas-11/Pages/Admin/Santri/SantriDetail";
// import SantriNilai from "./Tugas-11/Pages/Admin/Santri/SantriNilai";
// import SantriAbsensi from "./Tugas-11/Pages/Admin/Santri/SantriAbsensi";
// import AppLayouts from "./Tugas-11/Layouts/AppLayouts";
// import SantriLayout from "./Tugas-11/Layouts/SantriLayout";


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

  /* 
    --- ROUTE ADMIN LAMA (DIKOMENTAR SEMENTARA) 
  */
  // {
  //   path: "/admin",
  //   element: <AppLayouts />,
  //   children: [
  //     { index: true, element: <AdminHome /> },
  //     { path: "about", element: <About /> },
  //     {
  //       path: "santri",
  //       element: <SantriLayout />,
  //       children: [
  //         { index: true, element: <SantriList /> },
  //         {
  //           path: "list",
  //           children: [
  //             { index: true, element: <SantriList /> },
  //             { path: ":santri_id", element: <SantriDetail /> },
  //           ],
  //         },
  //         { path: "nilai", element: <SantriNilai /> },
  //         { path: "absensi", element: <SantriAbsensi /> },
  //       ],
  //     },
  //   ],
  // },

  // ROUTE ADMIN BARU
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
    ],
  },

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