"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Types
interface Props {
    links: { name: string, href: string }[],
    page: string,
    setPage: (arg: string) => void
}

export default function SettingsSidebar( {links, page, setPage} : Props ) {

    return ( <div>

        <div className='bg-[rgba(255,255,255,.03)] rounded-lg p-2'>

            <ul>

                {links.map((link, index) => {

                    console.log("url", page, link.href)

                    return <li key={index}> 
                        <Link 
                            onClick={() => setPage(link.name)}
                            href={link.href} 
                            className={`block rounded-lg p-2 hover:bg-[rgba(255,255,255,0.03)] ${link.href == page ? "bg-white/5" : ""} ${index !== links.length - 1 && "mb-1"}`}> 
                                {link.name} 
                            </Link> 
                        </li>

                })}

            </ul>

        </div>
            
    </div> )
}