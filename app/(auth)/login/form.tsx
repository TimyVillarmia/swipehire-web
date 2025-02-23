"use client";

import { login } from "@/actions/auth";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormStatus } from "react-dom";
import { useActionState } from "react"

export function SignInForm() {
    const [state, signinAction] = useActionState(login, undefined);

    return (
        <div>
            <form action={signinAction} className="flex max-w-[300px] flex-col gap-y-6">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" placeholder="Email" />
                    {state?.errors?.email && (
                        <p className="text-red-500">{state.errors.email}</p>
                    )}
                </div>


                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" placeholder="Password" />
                    {state?.errors?.password && (
                        <p className="text-red-500">{state.errors.password}</p>
                    )}
                </div>
                <SubmitButton />
            </form>
        </div>

    )
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="w-full bg-[#6C5CE7] hover:bg-[#5A4BD1]" disabled={pending}>Sign In</Button>
    );
}


