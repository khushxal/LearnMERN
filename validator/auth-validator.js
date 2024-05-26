//  This is ZOD file for schema
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

const contactSchema = z.object({
  email: z
    .string({ required_error: "Email cannot be empty" })
    .email({ required_error: "Email only" })
    .trim(),
  phone: z
    .string({ required_error: "Phone cannot be empty" })
    .min(10, { message: "Number must contain 10 digits atleast" })
    .max(10, { message: "Number must contain 10 digits only" })
    .trim(),
  query: z.string({ required_error: "Query cannot be empty" }).min(2).trim(),
});

export { signupSchema, signinSchema, contactSchema };
