import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { SessionPayload } from "@/definitions";

const secretKey = "12345";
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();

  cookieStore.delete("session");
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function getUserIdFromCookie(): Promise<number | null> {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("session")?.value;

    if (!cookie) {
      return null; // No session cookie found
    }

    const session = await decrypt(cookie);
    return (session?.userId as number | null) || null; // Type assertion


  } catch (error) {
    console.error("Error getting user ID from cookie:", error);
    return null; // Error during decryption or cookie retrieval
  }
}
