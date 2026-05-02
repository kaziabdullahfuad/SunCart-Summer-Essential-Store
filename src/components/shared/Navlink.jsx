"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({children,href}) => {

    const pathname = usePathname();
    console.log(pathname, "pathname");

    const isActive=href===pathname;
    

    return (
        <div>
            <Link href={href} className={`${isActive ? "border-b-2 border-b-[#FF9F1C] text-[#FF9F1C] font-semibold" : ""}`}>{children}</Link>
        </div>
    );
};

export default Navlink;