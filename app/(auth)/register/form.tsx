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
            <form action={signupAction} className="flex max-w-[300px] flex-col gap-2">
                <div className="space-y-2">
                    <Label>I am an:</Label>
                    <RadioGroup defaultValue="intern" name="accountType" className="flex items-center gap-4">
                        <Label
                            htmlFor="option1"
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-zinc-100 dark:[&:has(:checked)]:bg-zinc-800"
                        >
                            <RadioGroupItem id="intern" value="intern" />
                            Intern
                        </Label>
                        <Label
                            htmlFor="option2"
                            className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-zinc-100 dark:[&:has(:checked)]:bg-zinc-800"
                        >
                            <RadioGroupItem id="recruiter" value="recruiter" />
                            Recruiter
                        </Label>
                    </RadioGroup>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="First name" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Last name" />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" placeholder="Email" />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" name="password" placeholder="Enter Password" />
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



