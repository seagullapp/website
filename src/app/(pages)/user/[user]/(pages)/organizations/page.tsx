import GetUserOwnedOrganizationsBySlug from "@/lib/organizations/GetUserOwnedOrganizationsBySlug";
import HorizontalOrganizationWidget from "@/app/components/Organization/HorizontalOrganizationWidget/HorizontalOrganizationWidget"
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ user: string, page?: string }>,
}

// Types
import { Organization } from "@/types/organization/organization";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function OrganizationPage( {params} : Props ) {

    const slug = (await params).user;
    const cookieStore = await cookies()
    const isLoggedIn = cookieStore.get("session") ? true : false

    const result = await GetUserOwnedOrganizationsBySlug(slug)
    if (!result || !result.success) {
        notFound();
    }
    const organizations : Organization[] = result.data;
    
    return ( <div className='container'>

        <div className="top mb-2">
            <h3 className='font-semibold'> Organizations </h3>
            {(organizations && organizations.length > 0) && <p className="grey"> Owned by the user </p>}
        </div>

        {(organizations && organizations.length > 0) ? <>

            {organizations.map((org, index) => {

                return ( <div key={index}>  
                    <HorizontalOrganizationWidget organization={org} className="my-2"/>
                </div> )

            })}
        
        </> : <div className='flex flex-col justify-center text-center items-center min-h-[300px] w-full mt-4'>
            
            {isLoggedIn ? <> 
            
                <p> This user has no organizations </p> 

            </> : <>

                <Link href={`/signup?redirect=/user/${slug}/organizations`}> Signup to view organizations </Link>
            
            </>}

        </div>}

    </div> )
}