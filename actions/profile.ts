"use server";

import { InternProfileSchema, recruiterProfileSchema } from "@/definitions";
import {
  getAccountById,
  getRecruiterProfileStatusById,
  postRecruitProfile,
  putRecruitProfile,
} from "@/lib/data";
import { getUserIdFromCookie } from "@/lib/sessions";

export async function recruiterProfileAction(
  prevState: any,
  formData: FormData
) {
  const result = recruiterProfileSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const {
    profilePicture,
    firstName,
    lastName,
    companyName,
    workAddress,
    jobPosition,
    field,
    phoneNumber,
  } = result.data;

  const currentUserId = await getUserIdFromCookie();

  const hasProfile = await getRecruiterProfileStatusById(currentUserId);

  if (!hasProfile) {
    // POST create profile
    const response = await postRecruitProfile(
      firstName,
      lastName,
      jobPosition,
      companyName,
      field,
      workAddress,
      phoneNumber,
      currentUserId
    );

    if (!response.ok) {
      return {
        errors: {
          email: ["Can't create your profile"],
        },
      };
    }
  } else {
    // PUT update profile
    const response = await putRecruitProfile(
      firstName,
      lastName,
      jobPosition,
      companyName,
      field,
      workAddress,
      phoneNumber,
      currentUserId
    );

    if (!response.ok) {
      return {
        errors: {
          email: ["Can't update your profile"],
        },
      };
    }
  }
}

export async function InterProfileAction(prevState: any, formData: FormData) {

  const result = InternProfileSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const {
    profilePicture,
    firstName,
    lastName,
    phoneNumber,
    specialization,
    skills,
    field,
    schoolName,
    degree,
    education_startDate,
    education_endDate,
    companyName,
    location,
    position,
    work_startDate,
    work_endDate,
  } = result.data;

  const currentUserId = await getUserIdFromCookie();

  const currentAccount = await getAccountById(currentUserId);


}
