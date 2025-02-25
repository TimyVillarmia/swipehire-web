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
  field: z.string().min(1, { message: "Field is required" }),
  phoneNumber: z.string().refine(
    (val) => {
      // Remove any non-digit characters
      const cleanedVal = val.replace(/\D/g, "");

      // Check if the cleaned value has a valid length
      return cleanedVal.length >= 7 && cleanedVal.length <= 15; //Adjust these lengths as needed.
    },
    {
      message: "Invalid phone number",
    }
  ),
});

export const InternProfileSchema = z.object({
  profilePicture: z.any().optional().nullable(), // For file uploads
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phoneNumber: z.string().refine(
    (val) => {
      // Remove any non-digit characters
      const cleanedVal = val.replace(/\D/g, "");

      // Check if the cleaned value has a valid length
      return cleanedVal.length >= 7 && cleanedVal.length <= 15; //Adjust these lengths as needed.
    },
    {
      message: "Invalid phone number",
    }
  ),
  specialization: z.string().min(1, { message: "Specialization is required" }),
  skills: z.string().optional(),
  field: z.string().optional(),
  description: z.string().optional(),
  schoolName: z.string().min(1, { message: "School name is required" }),
  degree: z.string().min(1, { message: "Degree is required" }),
  education_startDate: z.string().datetime({ message: "Invalid start date" }),
  education_endDate: z.string().datetime({ message: "Invalid end date" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  position: z.string().min(1, { message: "Position is required" }),
  work_startDate: z.string().datetime({ message: "Invalid start date" }),
  work_endDate: z.string().datetime({ message: "Invalid end date" }),
});

export interface InternProfileData {
  firstname: string;
  lastname: string;
  contactNumber: string;
  email: string;
  specialization: string;
  skills: string;
  description: string;
  hasProfile: boolean;
  accountId: number;
  fieldId: number;
  school: string;
  degree: string;
  startDate: string; // ISO 8601 date-time string
  endDate: string; // ISO 8601 date-time string
  company: string;
  companyLocation: string;
  position: string;
  startWorkDate: string; // ISO 8601 date-time string
  endWorkDate: string; // ISO 8601 date-time string
}

export type SessionPayload = {
  userId: number;
  expiresAt: Date;
};
