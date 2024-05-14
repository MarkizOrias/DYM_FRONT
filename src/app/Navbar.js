import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className='flex-none'>
                <nav className='relative mx-auto p-6'>
                    <div className='flex items-center justify-between'>
                        <div className='py-2'>
                            LOGO
                            <img src="img/logo.svg" alt="" />
                        </div>
                        <div className='hidden md:flex space-x-6 text-stone-400'>
                            <a href='#' className='hover:text-cyan-400 py-2'>ABOUT</a>
                            <a href='#' className='px-6 py-2 text-white bg-slate-600 rounded-full baseline hover:text-cyan-400 hover:bg-slate-400'>CONNECT</a>
                            <a href='#' className='hover:text-cyan-400 py-2'>THEME</a>
                        </div>
                    </div>
                </nav>
            </header>
            <section className='flex h-svh relative'>
                <section className='hidden md:flex pr-0 place-content-center w-1/4 relative justify-start px-2 py-2'>
                    <div className='flex rounded w-full flex-col static p-4 bg-slate-400'>
                        <p className=''>#RANKING#</p>
                        <div className='flex static rounded px-6 py-2 mb-2 bg-slate-200'>Search</div>
                        <div className='flex-1 static rounded px-6 py-2 bg-slate-200'>LIST</div>
                        <div className='flex-bottom static rounded px-6 py-2'>hyperlinks with page numbers here</div>
                    </div>
                </section>
                <section className='flex w-full md:w-3/4 relative p-2 '>
                    <div className='w-full flex-col justify-center rounded relative p-4 bg-slate-400 overflow-y-scroll'>
                        <div className='flex static justify-center w-40 mb-2 rounded bg-slate-200'>
                            <p>+ ADD YOUR MEME</p>
                        </div>
                        {/* <div className='h-64 rounded mb-2 bg-slate-200'>
                            <p className='ml-2'>MEME #1 HERE flex</p>
                        </div>
                        <div className='h-64 rounded mb-2 bg-slate-200'>
                            <p>MEME #2 HERE flex</p>
                        </div>
                        <div className='h-64 rounded mb-2 bg-slate-200'>
                            <p>MEME #3 HERE flex</p>
                        </div>
                        <div className='h-64 rounded mb-2 bg-slate-200'>
                            <p>MEME #4 HERE flex</p>
                        </div>
                        <div className='h-64 rounded mb-2 bg-slate-200'>
                            <p>MEME #5 HERE flex</p>
                        </div> */}

                    </div>
                </section>
            </section>
            <footer className='flex mt-0 bottom-0'>
                <div>
                    <p>Footer @All rights reserved</p>
                </div>

            </footer>
        </>
    )
}

export default Navbar