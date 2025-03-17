"use client"
import { useEffect, useState } from "react"

import getUserOwnedOrganization from "@/lib/organization/getUserOwnedOrganization"

// Redux
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

// Types
import { RootState } from "@/app/redux/store"
import { Organization } from "@/types/organization/organization"
import { updateUser } from "@/app/redux/slices/userSlice"

export default function OrganizationPage() {

    const [organizations, setOrganizations] = useState<Organization[]>([])
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {

        async function fetchOrganizations() {
            const result = await getUserOwnedOrganization(user.id)

            console.log(result)

            if (!result.success) { setOrganizations([]); return }

            // dispatch(updateUser({organizations: result.data}))
            setOrganizations(result.data)
        }

        fetchOrganizations()

    }, [user])

    return ( <div>

        <div className="top mb-2">
            <h3 className='font-semibold'> Organizations </h3>
            <p className="grey"> {organizations.length > 0 ? "Organizations you own" : "Communities that help you grow" } </p>
        </div>

        {organizations.length > 0 ? <>

            {organizations.map((org, index) => {

                return ( <div key={index}>
                    {org.name}
                </div> )

            })}
        
        </> : <div className='widget no-border flex flex-col justify-center items-center min-h-[300px] w-full mt-4'>
            
            <h4 className='text-xl'> Join or create your first organization </h4>

            <button className="button pill white mt-2 text-[16px]"> Explore Organizations </button>


        </div>}

    </div> )
}