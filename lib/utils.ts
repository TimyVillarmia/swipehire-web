import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getAccountTypeIdByTypeName(typeName: string,jsonResponse: any ) {
  const accountType = jsonResponse.$values.find(item => item.typeName === typeName);
  if (accountType) {
    return accountType.id;
  } else {
    return null; // Or handle the case where the typeName is not found
  }
}



export function getAccountTypeNameByAccountId(accountId: string, jsonResponse: any ): string | null {
  if (!jsonResponse || !jsonResponse.$values) {
    return null; // Handle cases where data is invalid
  }

  const account = jsonResponse.$values.find((item: any) => item.id === accountId);

  if (account && account.accountType && account.accountType.typeName) {
    return account.accountType.typeName;
  } else {
    return null; // Account not found or typeName missing
  }
}