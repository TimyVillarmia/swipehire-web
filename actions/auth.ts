"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/sessions";
import { loginSchema, registerSchema } from "@/definitions";
import { getAccountTypeIdByTypeName } from "@/lib/data";

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  

  const response = await fetch("http://localhost:5152/api/Auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  const user = await response.json();

  await createSession(user.accountId);

  redirect("/dashboard");
}

export async function signUp(prevState: any, formData: FormData) {
  const result = registerSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { accountType, firstName, lastName, email, password } = result.data;

  
  const accountTypeId = await getAccountTypeIdByTypeName(accountType);

  const registerFormData = new FormData();

  registerFormData.append("InternPicture", "");
  registerFormData.append("Firstname", firstName);
  registerFormData.append("Lastname", lastName);
  registerFormData.append("Email", email);
  registerFormData.append("Password", password);
  registerFormData.append("AccountTypeId", accountTypeId);

  const response = await fetch("http://localhost:5152/api/Account", {
    method: "POST",
    body: registerFormData,
  });


  if (!response.ok) {

    return {
      errors: {
        email: ["Unable to create your account"],
      },
    };
  }

  redirect("/login");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}