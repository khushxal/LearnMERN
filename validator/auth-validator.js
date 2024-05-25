import { z } from "zod";

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(2, { message: "Username must be 2 character" })
    .toLowerCase(),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password should contain atleast 7 character" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .min(10, { message: "Should contain 10 digit" })
    .max(10, { message: "Should contain 10 digit" }),
});

export default signupSchema;
