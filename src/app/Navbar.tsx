import React from 'react';

type NavbarProps = {
    // You can define props here if needed
};

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <>
            <header className='flex-none'>
                <nav className='relative mx-auto p-6'>
                    <div className='flex items-center justify-between'>
                        <div className='py-2'>
                            <img src="img/logo.svg" alt="Logo" />
                        </div>
                        <div className='hidden md:flex space-x-6 text-stone-400'>
                            <a href='/about' className='hover:text-cyan-400 py-2'>ABOUT</a>
                            <a href='/admin' className='hover:text-cyan-400 py-2'>ADMIN</a>
                            <a href='#' className='px-6 py-2 text-white bg-slate-600 rounded-full baseline hover:text-cyan-400 hover:bg-slate-400'>CONNECT</a>
                            <a href='#' className='hover:text-cyan-400 py-2'>THEME</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
