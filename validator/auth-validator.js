import { z } from "zod";

const signinSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ required_error: "Provide email only" }),
  password: z
    .string()
    .min(7, { message: "Password must consist 7 alphabets " }),
});

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(2, { message: "Username must be 2 character" })
    .toLowerCase(),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ required_error: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password should contain atleast 7 character" }),
  phone: z
    .string({ required_error: "Phone number is required" })
    .min(10, { message: "Should contain 10 digit" })
    .max(10, { message: "Should contain 10 digit" }),
});

export { signupSchema, signinSchema };
