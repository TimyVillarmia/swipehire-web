import { recruiterProfileSchema } from "@/definitions";
import { decrypt } from "@/lib/sessions";
import { cookies } from "next/headers";

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
    industry,
    phoneNumber,
  } = result.data;

  const cookieStore = await cookies();

  const cookie = cookieStore.get("session")?.value;
  const session = await decrypt(cookie);
  const currentUserId = !session?.userId;

  const response = await fetch("http://localhost:5152/api/Recruit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      profilePicture,
      firstName,
      lastName,
      companyName,
      workAddress,
      jobPosition,
      industry,
      phoneNumber,
      currentUserId,
    }),
  });

  if (!response.ok) {
    return {
      errors: {
        email: ["Can't update your profile"],
      },
    };
  }
}

// export async function getRecruiterProfile(userId: string) {
//   const response = await fetch("http://localhost:5152/api/Recruit");

//   if (!result.success) {
//     return {
//       errors: result.error.flatten().fieldErrors,
//     };
//   }

//   const response = await fetch("http://localhost:5152/api/Recruit");

//   if (!response.ok) {
//     return {
//       errors: {
//         email: ["Invalid email or password"],
//       },
//     };
//   }
// }
