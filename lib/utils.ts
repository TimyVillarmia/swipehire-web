import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAccountTypeIdByTypeName(
  typeName: string,
  jsonResponse: any
) {
  const accountType = jsonResponse.$values.find(
    (item) => item.typeName === typeName
  );
  if (accountType) {
    return accountType.id;
  } else {
    return null; // Or handle the case where the typeName is not found
  }
}

export async function fetchUserRecruitProfileStatus(userId: string) {
  try {
    const response = await fetch(`http://localhost:5152/api/Recruit/${userId}`);

    if (response.status === 404) {
      return false; // profile is not set up
    }
    if (response.status === 200) {
      return true; // profile is set up
    }

    if (!response.ok) {
      console.error(
        `Error fetching profile for user ${userId}: ${response.status}`
      );
      return false; // Error fetching profile, consider it not set up
    }
  } catch (error) {
    console.error(`Error fetching profile status for user ${userId}:`, error);
    return false; // Error during fetch, consider profile not set up
  }
}

export async function fetchUserInternProfileStatus(userId: string) {
  try {
    const response = await fetch(`http://localhost:5152/api/Intern/${userId}`);

    if (response.status === 404) {
      return false; // User not found, profile is not set up
    }

    if (!response.ok) {
      console.error(
        `Error fetching profile for user ${userId}: ${response.status}`
      );
      return false; // Error fetching profile, consider it not set up
    }
  } catch (error) {
    console.error(`Error fetching profile status for user ${userId}:`, error);
    return false; // Error during fetch, consider profile not set up
  }
}
