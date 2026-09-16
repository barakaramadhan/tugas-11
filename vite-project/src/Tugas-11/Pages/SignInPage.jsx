import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function SignInPage() {
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

     
      <form
        className="space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Email
          </label>

          <Input
            type="email"
            placeholder="nama@email.com"
            className="h-11"
          />
        </div>

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
            type="password"
            placeholder="Masukkan password"
            className="h-11"
          />
        </div>

        <Button
          className="w-full h-11"
          type="submit"
        >
          Sign In
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