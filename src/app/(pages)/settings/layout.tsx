import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { Container } from "./Container";

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

        <Container> {children} </Container>

    </div> )
}