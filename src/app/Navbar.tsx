'use client'
import React from 'react';
import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import Image from "next/image";
import { ConnectWallet, darkTheme, useAddress } from "@thirdweb-dev/react"
import Link from 'next/link';

const adminAddress = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const Navbar: React.FC = () => {

    const activeAccount = useAddress();

    const isAdmin = () => {
        return activeAccount && activeAccount && adminAddress &&
            activeAccount.toLowerCase() === adminAddress.toLowerCase();
    };

    return (
        <>
            <header className='flex-none'>
                <nav className='relative mx-auto p-6'>
                    <div className='flex items-center justify-between'>
                        <div className='py-1 static h-20 w-20'>
                            <Link href="/" passHref>
                                <Image
                                    src="/LOGOTransparent.png"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    layout='responsive'
                                />
                            </Link>
                        </div>
                        <div className='hidden md:flex space-x-6 items-center text-stone-400'>
                            <a href='/about' className='hover:text-cyan-400'>ABOUT</a>
                            {isAdmin() && <a href='/admin' className='hover:text-cyan-400'>ADMIN</a>}
                            <a href='/profile' className='hover:text-cyan-400'>PROFILE</a>
                            <ConnectWallet
                                theme={darkTheme({
                                    colors: {
                                        primaryButtonText: "#fff",
                                        primaryText: "#5acdf1",
                                        primaryButtonBg: "#9833e3",
                                        connectedButtonBg: "#20093d",
                                        connectedButtonBgHover: "#4d0dab",
                                        modalBg: "#1d093c",
                                        dropdownBg: "#1d093c",
                                        secondaryButtonBg: "#fff",
                                        walletSelectorButtonHoverBg: "#411c91",
                                    },
                                })}
                                modalSize={"wide"}
                                switchToActiveChain={true}
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
