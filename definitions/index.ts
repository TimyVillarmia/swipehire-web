import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export const registerSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  accountType: z.enum(["intern", "recruiter"]),
});

export const recruiterProfileSchema = z.object({
  profilePicture: z.any().optional().nullable(), // For file uploads, use z.any() or handle it separately
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  workAddress: z.string().min(1, { message: "Work address is required" }),
  jobPosition: z.string().min(1, { message: "Job position is required" }),
  industry: z.string().min(1, { message: "Industry is required" }),
  phoneNumber: z.string().refine((val) => /^\+?[1-9]\d{1,14}$/.test(val), {
    message: "Invalid phone number",
  }),
});

export type SessionPayload = {
  userId: number;
  expiresAt: Date;
};
