
import { getUserIdFromCookie } from "@/lib/sessions";
import { InternForm } from "./internform";
import { RecruiterForm } from "./recruiterform";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getAccountById } from "@/lib/data";


export default async function Profile() {

    const currentUserId = await getUserIdFromCookie();
    const { accountType, firstname, lastname, email, internPictureUrl } = await getAccountById(currentUserId);
    const typeName = accountType.typeName;

    return (
        <div>
            <div className="grid place-items-center my-12">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={internPictureUrl} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-2xl font-semibold">{firstname + " " + lastname}</h1>
                        <p className="text-muted-foreground">{email}</p>
                    </div>
                </div>
                {
                    typeName === "Intern" ? <InternForm firstName={firstname} lastName={lastname} /> : <RecruiterForm firstName={firstname} lastName={lastname} />
                }
            </div>
        </div>

    );
}