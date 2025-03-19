import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import SettingsSidebar from "./SettingsSidebar";

// Types
interface Props {
    children: React.ReactNode
}

export default async function SettingsPage( {children} : Props ) {

    const cookieStore = await cookies()
    const session = cookieStore.get("session")

    if (!session) { 
        return redirect("/login")
    }

    return ( <div className='wrapper py-4'>

        <div className='container'>

            <h1 className='mb-1 grey'> Settings </h1>
            <div className="grid grid-cols-[20%_80%]">
                <SettingsSidebar />
                
                <div className='pl-5'>
                    {children}
                </div>
            </div>

        </div>

    </div> )
}