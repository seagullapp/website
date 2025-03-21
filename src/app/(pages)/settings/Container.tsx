"use client"

import { usePathname } from "next/navigation";
import SettingsSidebar from "./SettingsSidebar";
import { useEffect, useState } from "react";

// Types 
interface Props {
    children: React.ReactNode
}

export function Container( {children} : Props ) {

    const pathname = usePathname()
    useEffect(() => {

        setPage(pathname)

    }, [pathname])
    const [page, setPage] = useState<string>("")

    const links = [ 
        { href: "/settings", name: "Profile" },
        { href: "/settings/notifications", name: "Notifications" }  
    ]

    return ( <div className='container'>

        <h1 className='mb-2'> Settings <span className='grey'> / {links.filter(link => link.href === page)[0]?.name} </span> </h1>

        <div className="grid grid-cols-[20%_80%]">
            <SettingsSidebar links={links} page={page} setPage={setPage} />
            
            <div className='pl-4'>
                {children}
            </div>
        </div>

    </div> )
}