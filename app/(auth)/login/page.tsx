"use client"

import { SignInForm } from "./form"
import Link from 'next/link'

export default function SignInPage() {

  return (
    <div>
      <SignInForm />
      <p className="mt-6 text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-[#6C5CE7] hover:underline">
          Create account
        </Link>
      </p>
    </div>

  )
}

