import { Outlet } from "react-router";
import Walpaper from "../Assets/walpaper.jpeg";

export default function AuthLayout() {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <img
        src={Walpaper}
        alt="Auth Illustration"
        className="hidden md:block w-1/2 h-full object-cover"
      />

      <div className="w-full md:w-1/2 h-full flex items-start justify-center p-8 pt-24 bg-background overflow-y-auto">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}