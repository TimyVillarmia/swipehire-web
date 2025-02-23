"use client"

import { SignupForm } from "./form"
import Link from 'next/link'


export default function SignUpPage() {

    return (
        <div>
            <SignupForm />
            <p className="mt-6 text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-[#6C5CE7]  hover:underline">
                    Sign In
                </Link>
            </p>
        </div>

    )
}

