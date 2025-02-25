"use client"


import { logout } from "@/actions/auth"
import { InterProfileAction } from "@/actions/profile"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { format } from "date-fns"

import { useActionState, useState } from "react"
import { useFormStatus } from "react-dom"


interface InternFormProps {
    firstName: string;
    lastName: string;
}


export function InternForm({ firstName, lastName }: InternFormProps) {
    const [state, updateProfile] = useActionState(InterProfileAction, undefined);
    const [startDate, setStartDate] = useState<Date | undefined>();
    const [endDate, setEndDate] = useState<Date | undefined>();

    const [startWorkDate, setStartWorkDate] = useState<Date | undefined>();
    const [endWorkDate, setWorkEndDate] = useState<Date | undefined>();

    // const [field, setField] = useState("");
    // const [fields, setFields] = useState<Framework[]>([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch("http://localhost:5152/api/Field");
    //         const data = await response.json();
    //         setFields(data.$values);
    //     }

    //     fetchData();
    // }, []);

    // console.log(fields)

    const handleStartDateChange = (date: Date | undefined) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Date | undefined) => {
        setEndDate(date);
    };

    const handleStartWorkDateChange = (date: Date | undefined) => {
        setStartWorkDate(date);
    };

    const handleEndWorkDateChange = (date: Date | undefined) => {
        setWorkEndDate(date);
    };


    const handleSubmit = async (formData: FormData) => {
        formData.set("education_startDate", startDate ? format(startDate, "yyyy-MM-dd") : "");
        formData.set("education_endDate", endDate ? format(endDate, "yyyy-MM-dd") : "");
        await updateProfile(formData);
    };
    return (
        <div>
            <h2 className="text-lg font-semibold mt-6 mb-4">Basic Information</h2>
            <form action={updateProfile} className="flex max-w-[300px] flex-col gap-2">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Picture</Label>
                    <Input id="picture" name="profilePicture" type="file" />
                    {state?.errors?.profilePicture && (
                        <p className="text-red-500">{state.errors.profilePicture}</p>
                    )}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="First Name" defaultValue={firstName} />
                        {state?.errors?.firstName && (
                            <p className="text-red-500">{state.errors.firstName}</p>
                        )}
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="First Name" defaultValue={lastName} />
                        {state?.errors?.lastName && (
                            <p className="text-red-500">{state.errors.lastName}</p>
                        )}
                    </div>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" placeholder="Share a little about yourself" />
                    {state?.errors?.description && (
                        <p className="text-red-500">{state.errors.description}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" />
                    {state?.errors?.phoneNumber && (
                        <p className="text-red-500">{state.errors.phoneNumber}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="specialization">Specialization</Label>
                    <Input id="specialization" name="specialization" placeholder="Enter Specialization" />
                    {state?.errors?.specialization && (
                        <p className="text-red-500">{state.errors.specialization}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="field">Field</Label>
                    {/* <Combobox
                        items={fields}
                        value={field}
                        onChange={setField}
                        placeholder="Select Framework"
                    /> */}
                    <Input id="field" name="field" placeholder="Enter Field" />
                    {state?.errors?.field && (
                        <p className="text-red-500">{state.errors.field}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="skills">Skills</Label>
                    <Input id="skills" name="skills" placeholder="Enter Skills" />
                    {state?.errors?.skills && (
                        <p className="text-red-500">{state.errors.skills}</p>
                    )}
                </div>

                <h2 className="text-lg font-semibold mt-6 mb-4">Education</h2>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="schoolName">School Name</Label>
                    <Input id="schoolName" name="schoolName" placeholder="Enter School Name" />
                    {state?.errors?.schoolName && (
                        <p className="text-red-500">{state.errors.schoolName}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="schoolName">School Location</Label>
                    <Input id="location" name="location" placeholder="Enter School Location" />
                    {state?.errors?.location && (
                        <p className="text-red-500">{state.errors.location}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <DatePicker
                        label="Start Date"
                        name="education_startDate"
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                    {state?.errors?.education_startDate && (
                        <p className="text-red-500">{state.errors.education_startDate}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <DatePicker
                        label="End Date"
                        name="education_endDate"
                        value={endDate}
                        onChange={handleEndDateChange}
                    />
                    {state?.errors?.education_endDate && (
                        <p className="text-red-500">{state.errors.education_endDate}</p>
                    )}
                </div>

                <h2 className="text-lg font-semibold mt-6 mb-4">Work Experience</h2>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" name="companyName" placeholder="Enter Company Name" />
                    {state?.errors?.companyName && (
                        <p className="text-red-500">{state.errors.companyName}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" name="location" placeholder="Enter Company Location" />
                    {state?.errors?.location && (
                        <p className="text-red-500">{state.errors.location}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="position">Job Position</Label>
                    <Input id="position" name="position" placeholder="Enter Job Position" />
                    {state?.errors?.position && (
                        <p className="text-red-500">{state.errors.position}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <DatePicker
                        label="Start Date"
                        name="work_startDate"
                        value={startWorkDate}
                        onChange={handleStartWorkDateChange}
                    />
                    {state?.errors?.work_startDate && (
                        <p className="text-red-500">{state.errors.work_startDate}</p>
                    )}
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <DatePicker
                        label="End Date"
                        name="work_endDate"
                        value={endWorkDate}
                        onChange={handleEndWorkDateChange}
                    />
                    {state?.errors?.work_endDate && (
                        <p className="text-red-500">{state.errors.work_endDate}</p>
                    )}
                </div>
                <div className="flex space-x-4">
                    <Button onClick={() => logout()} className="w-full border border-[#6C5CE7] bg-white text-[#6C5CE7] hover:bg-[#5A4BD1] hover:text-white uppercase">Logout</Button>
                    <SubmitButton />
                </div>

            </form>
        </div>

    )
}


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="w-full bg-[#6C5CE7] hover:bg-[#5A4BD1] uppercase">Complete</Button>
    );
}



