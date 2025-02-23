import { decrypt } from "@/lib/sessions";
import { getAccountTypeNameByAccountId } from "@/lib/utils";
import { cookies } from "next/headers";
import 
    import { InternForm } from "./internform";
import { RecruiterForm } from "./recruiterform";

export default async function Profile() {

    const cookieStore = await cookies();
    const cookie = cookieStore.get("session")?.value;
    const session = await decrypt(cookie);
    const currentUserId = session?.userId;

    const accountTypeResponse = await fetch(
        "http://localhost:5152/api/Account"
    );

    const accountsData = await accountTypeResponse.json();

    const type = await getAccountTypeNameByAccountId(currentUserId, accountsData);


    return (
        <div>
            {
                type === "intern" ? <InternForm/> : <RecruiterForm/>
            }
        </div>
    );
}