import React from "react";
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/Tugas-11/Pages/Auth/store/useAuthStore";

function UserBio() {
  const user = useAuthStore((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      bio: user?.bio || "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6">
      <div className="max-w-2xl rounded-xl border bg-background p-6">
        <h1 className="text-xl font-semibold">Bio / Detail User</h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Update informasi pribadi kamu.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
          {/* Nama */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Nama
            </label>

            <input
              {...register("name", {
                required: "Nama wajib diisi",
                minLength: {
                  value: 3,
                  message: "Nama minimal 3 karakter",
                },
              })}
              className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              placeholder="Masukkan nama"
            />

            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Email
            </label>

            <input
              {...register("email", {
                required: "Email wajib diisi",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format email tidak valid",
                },
              })}
              type="email"
              className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              placeholder="Masukkan email"
            />

            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* No HP */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              No. HP
            </label>

            <input
              {...register("phone")}
              type="tel"
              className="w-full rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              placeholder="Masukkan nomor HP"
            />
          </div>

          {/* Alamat */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Alamat
            </label>

            <textarea
              {...register("address")}
              className="min-h-24 w-full resize-none rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              placeholder="Masukkan alamat"
            />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Bio
            </label>

            <textarea
              {...register("bio")}
              className="min-h-28 w-full resize-none rounded-lg border bg-background px-4 py-3 outline-none focus:border-primary"
              placeholder="Ceritakan sedikit tentang kamu"
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full rounded-lg px-4 py-3 font-medium text-white transition ${
              isValid
                ? "bg-primary hover:opacity-90"
                : "cursor-not-allowed bg-primary/30"
            }`}
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserBio;