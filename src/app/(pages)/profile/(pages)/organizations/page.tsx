"use client"
import HorizontalOrganizationWidget from "@/app/components/Organization/HorizontalOrganizationWidget/HorizontalOrganizationWidget"

// Redux
import { useSelector } from "react-redux"

// Types
import { RootState } from "@/app/redux/store"

export default function OrganizationPage() {

    const user = useSelector((state: RootState) => state.user)

    return ( <div>

        <div className="top mb-2">
            <h3 className='font-semibold'> Organizations </h3>
            <p className="grey"> {(user?.organizations && user?.organizations.length > 0) ? "Organizations you own" : "Communities that help you grow" } </p>
        </div>

        {(user?.organizations && user?.organizations.length > 0) ? <>

            {user.organizations.map((org, index) => {

                return ( <div key={index}>  
                    <HorizontalOrganizationWidget organization={org} className="my-2"/>
                </div> )

            })}
        
        </> : <div className='widget no-border flex flex-col justify-center items-center min-h-[300px] w-full mt-4'>
            
            <h4 className='text-xl'> Join or create your first organization </h4>

            <button className="button pill white mt-2 text-[16px]"> Explore Organizations </button>


        </div>}

    </div> )
}