import React from 'react';

type BodyProps = {
    // You can define props here if needed
};

const Body: React.FC<BodyProps> = () => {
    return (
        <section className='flex h-svh relative'>
            <section className='hidden md:flex pr-0 place-content-center w-1/4 relative justify-start px-2 py-2'>
                <div className='flex rounded w-full flex-col static p-4 bg-slate-400'>
                    <p>#RANKING#</p>
                    <div className='flex static rounded px-6 py-2 mb-2 bg-slate-200'>Search</div>
                    <div className='flex-1 static rounded px-6 py-2 bg-slate-200'>LIST</div>
                    <div className='flex-bottom static rounded px-6 py-2'>hyperlinks with page numbers here</div>
                </div>
            </section>
            <section className='flex w-full md:w-3/4 relative p-2 '>
                <div className='flex  flex-col items-center w-full justify-start rounded relative p-4 bg-slate-400 overflow-y-scroll'>
                    <div className='flex static justify-center w-40 mb-2 rounded bg-slate-200'>
                        <p>+ ADD YOUR MEME</p>
                    </div>
                    <div className='h-64 w-full rounded mb-2 bg-slate-200'>
                        <p>MEME #2 HERE flex</p>
                    </div>
                    {/* You can uncomment and continue this section with additional content as needed */}
                </div>
            </section>
        </section>
    );
};

export default Body;