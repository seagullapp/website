"use client"
import Link from "next/link";
import { useState } from "react";

export default function SettingsSidebar() {

    const [page, setPage] = useState("")

    const links = [ 
        { href: "/settings/", name: "Profile" },
        { href: "/settings/notifications", name: "Notifications" }  
    ]

    return ( <div>

        <div className='bg-[rgba(255,255,255,.03)] rounded-lg p-2'>
            <ul>
                {/* <h3 className="subtitle grey mb-2"> Account </h3> */}

                {links.map((link, index) => {

                    return <li> 
                        <Link 
                            href={link.href} 
                            className={`block rounded-lg p-2 hover:bg-[rgba(255,255,255,0.03)] ${index !== links.length - 1 && "mb-1"}`}> 
                                {link.name} 
                            </Link> 
                        </li>

                })}

            </ul>

        </div>
            
    </div> )
}