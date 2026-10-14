
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "./store/useAuthStore";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";

export default function SignInPage() {
  const login = useAuthStore((state) => state.login);
  const error = useAuthStore((state) => state.error);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data) => {
    setIsLoading(true);

    try {
      // Simulasi proses loading
      await new Promise((resolve) => setTimeout(resolve, 800));

      const loggedInUser = login(data.email, data.password);

      if (loggedInUser) {
        if (loggedInUser.role === "admin") {
          navigate("/admin");
        } else if (loggedInUser.role === "user") {
          navigate("/user");
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Selamat Datang Kembali
        </h1>

        <p className="text-sm text-muted-foreground">
          Masukkan email dan password untuk masuk ke akun Anda.
        </p>
      </div>

      {/* Error dari proses login Zustand */}
      {error && (
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span>{error}</span>
        </div>
      )}

      <form
        className="space-y-5"
        onSubmit={handleSubmit(handleLogin)}
        noValidate
      >
        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Email
          </label>

          <Input
            {...register("email")}
            type="email"
            placeholder="nama@email.com"
            className={`h-11 ${
              errors.email
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
          />

          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">
              Password
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Lupa password?
            </Link>
          </div>

          <Input
            {...register("password")}
            type="password"
            placeholder="Masukkan password"
            className={`h-11 ${
              errors.password
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
          />

          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Button */}
        <Button
          className="w-full h-11"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Memproses...
            </span>
          ) : (
            "Sign In"
          )}
        </Button>
      </form>

      <div className="text-center text-sm text-muted-foreground">
        Belum punya akun?{" "}
        <Link
          to="/sign-up"
          className="font-medium text-foreground hover:underline"
        >
          Daftar sekarang
        </Link>
      </div>
    </div>
  );
}
