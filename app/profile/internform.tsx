
import { recruiterProfileAction } from "@/actions/profile"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"

export function InternForm() {
    const [state, updateProfile] = useActionState(recruiterProfileAction, undefined);

    return (
        <div>
            <form action={updateProfile} className="flex max-w-[300px] flex-col gap-2">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Picture</Label>
                    <Input id="picture" name="profilePicture" type="file" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="First Name" />
                    </div>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" name="companyName" placeholder="Company Name" />
                </div>


                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="workAddress">Work Address</Label>
                    <Input id="workAddress" name="workAddress" placeholder="Work Address" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="jobPosition">Job Position</Label>
                    <Input id="jobPosition" name="jobPosition" placeholder="Job Position" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" name="industry" placeholder="Industry" />
                </div>


                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" />
                </div>
                <SubmitButton />

            </form>
        </div>
    )
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="w-full bg-[#6C5CE7] hover:bg-[#5A4BD1] uppercase">Save</Button>
    );
}



