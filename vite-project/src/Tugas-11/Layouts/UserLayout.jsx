import { Outlet, Navigate } from "react-router";
import UserNavbar from "../components/user/UserNavbar";
import UserSidebar from "../components/user/UserSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuthStore } from "../Pages/Auth/store/useAuthStore";

function UserLayout() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  if (user.role !== "user") {
    return <Navigate to="/admin" replace />;
  }

  return (
    <SidebarProvider>
      <UserSidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <UserNavbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default UserLayout;