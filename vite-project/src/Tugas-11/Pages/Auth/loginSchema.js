import { z } from "zod";

export const loginSchema = z.object({
    email: z.email("email tidak valid"),
    password: z.string().min(6, "password minimal 6 karakter"),
})