"use client";

import { signUp } from "@/actions/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"

export function SignupForm() {
    const [state, signupAction] = useActionState(signUp, undefined);

    return (
        <div>
            <form action={signupAction} className="flex max-w-[300px] flex-col gap-y-6">
                <div className="space-y-2">
                    <Label>I am an:</Label>
                    <RadioGroup defaultValue="Intern" name="accountType" className="flex items-center gap-4">
                        <Label
                            htmlFor="option1"
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-zinc-100 dark:[&:has(:checked)]:bg-zinc-800"
                        >
                            <RadioGroupItem id="intern" value="Intern" />
                            Intern
                        </Label>
                        <Label
                            htmlFor="option2"
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-zinc-100 dark:[&:has(:checked)]:bg-zinc-800"
                        >
                            <RadioGroupItem id="recruiter" value="Recruiter" />
                            Recruiter
                        </Label>
                    </RadioGroup>
                    {state?.errors?.accountType && (
                        <p className="text-red-500">{state.errors.accountType}</p>
                    )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="First name" />
                        {state?.errors?.firstName && (
                        <p className="text-red-500">{state.errors.firstName}</p>
                    )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Last name" />
                        {state?.errors?.lastName && (
                        <p className="text-red-500">{state.errors.lastName}</p>
                    )}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="Email" />
                    {state?.errors?.email && (
                        <p className="text-red-500">{state.errors.email}</p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" name="password" placeholder="Enter Password" />
                    {state?.errors?.password && (
                        <p className="text-red-500">{state.errors.password}</p>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password" />
                </div>
                <SubmitButton />

            </form>
        </div>
    )
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="w-full bg-[#6C5CE7] hover:bg-[#5A4BD1] uppercase"  disabled={pending}>Create Account</Button>
    );
}



