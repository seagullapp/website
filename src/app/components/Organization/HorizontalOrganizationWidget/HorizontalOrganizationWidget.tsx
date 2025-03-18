import { Organization } from "@/types/organization/organization";
import Logo from "../Logo/Logo";
import Link from "next/link";

interface Props {
    organization: Organization,
    className?: string
}

export default function HorizontalOrganizationWidget( {organization, className} : Props ) {

    return ( <Link href={`/organization/${organization.slug}`} className={`widget block ${className && className}`}>

        <div className="flex gap-3 items-center">
            <Logo logo={organization.logo_id} logo_url={organization.logo_url} size={70}/>

            <div>
                <h3 className='text-lg font-semibold'> {organization.name} </h3>
            </div>
        </div>

    </Link> )

}