'use client'
import React from 'react';
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";
import Link from 'next/link';

const adminAddress = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const Navbar: React.FC = () => {

    const activeAccount = useActiveAccount();

    const isAdmin = () => {
        return activeAccount && activeAccount.address && adminAddress &&
            activeAccount.address.toLowerCase() === adminAddress.toLowerCase();
    };

    return (
        <>
            <header className='flex-none'>
                <nav className='relative mx-auto p-6'>
                    <div className='flex items-center justify-between'>
                        <div className='py-2 static h-20 w-20'>
                            <Link href="/" passHref>
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                    layout='responsive'
                                />
                            </Link>
                        </div>
                        <div className='hidden md:flex space-x-6 items-center text-stone-400'>
                            <a href='/about' className='hover:text-cyan-400'>ABOUT</a>
                            {isAdmin() && <a href='/admin' className='hover:text-cyan-400'>ADMIN</a>}
                            <a href='/profile' className='hover:text-cyan-400'>PROFILE</a>
                            <ConnectButton
                                client={client}
                                appMetadata={{
                                    name: "Example App",
                                    url: "https://example.com",
                                }}
                            />
                            <a href='#' className='hover:text-cyan-400'>THEME</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
