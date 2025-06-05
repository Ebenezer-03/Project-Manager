export const signInSchema = Z.object({
    email: Z.string().email(),
    password: Z.string().min(8, "Password must be at least 8 characters long"),
});