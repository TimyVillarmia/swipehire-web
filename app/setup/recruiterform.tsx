"use client"

import { logout } from "@/actions/auth"
import { recruiterProfileAction } from "@/actions/profile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"


interface RecruiterFormProps {
    firstName: string;
    lastName: string;
}
export function RecruiterForm({ firstName, lastName }: RecruiterFormProps) {
    const [state, updateProfile] = useActionState(recruiterProfileAction, undefined);


    return (
        <div>
            {/* Basic Information Form */}
            <div>
                <h2 className="text-lg font-semibold mt-6 mb-4">Basic Information</h2>
                <form action={updateProfile} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="profilePicture">Profile Picture</Label>
                        <Input id="profilePicture" name="profilePicture" type="file" />
                        {state?.errors?.profilePicture && (
                            <p className="text-red-500">{state.errors.profilePicture}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" name="firstName" placeholder="First name" defaultValue={firstName} />
                            {state?.errors?.firstName && (
                                <p className="text-red-500">{state.errors.firstName}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" name="lastName" placeholder="Last name" defaultValue={lastName} />
                            {state?.errors?.lastName && (
                                <p className="text-red-500">{state.errors.lastName}</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" name="companyName" placeholder="Enter Company Name" />
                        {state?.errors?.companyName && (
                            <p className="text-red-500">{state.errors.companyName}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="jobPosition">Position</Label>
                        <Input id="jobPosition" name="jobPosition" placeholder="Enter Position" />
                        {state?.errors?.jobPosition && (
                            <p className="text-red-500">{state.errors.jobPosition}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="field">Field</Label>
                        <Input id="field" name="field" placeholder="Enter Field" />
                        {state?.errors?.field && (
                            <p className="text-red-500">{state.errors.field}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="workAddress">Work Address</Label>
                        <Input id="workAddress" name="workAddress" placeholder="Enter Work Address" />
                        {state?.errors?.workAddress && (
                            <p className="text-red-500">{state.errors.workAddress}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" />
                        {state?.errors?.phoneNumber && (
                            <p className="text-red-500">{state.errors.phoneNumber}</p>
                        )}
                    </div>

                    <div className="flex space-x-4">
                        <Button onClick={() => logout()} className="w-full border border-[#6C5CE7] bg-white text-[#6C5CE7] hover:bg-[#5A4BD1] hover:text-white uppercase">Logout</Button>
                        <SubmitButton />
                    </div>
                </form>
            </div>
        </div>

    )
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="w-full bg-[#6C5CE7] hover:bg-[#5A4BD1] uppercase">Complete</Button>
    );
}



