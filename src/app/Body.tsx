"use client";

import React, { useState } from 'react';

type BodyProps = {
    // You can add props definitions here if needed
};

const Body: React.FC<BodyProps> = () => {
    // State to control when to apply the animation
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to handle button click
    const handleButtonClick = () => {
        setIsExpanded(!isExpanded); // Toggle the expanded state
    };

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
                <div className='flex flex-col items-center w-full justify-start rounded relative p-4 bg-slate-400 '>
                    <button
                        id="expandableDiv"
                        className={`flex justify-center w-40 mb-2 rounded ${isExpanded ? 'animate-expandWidthHeight' : ''} bg-slate-200`}
                        onClick={handleButtonClick}
                    >
                        <p>Add your own meme</p>
                    </button>
                    <div className={`flex-col w-full overflow-y-scroll ${isExpanded ? 'hidden' : ''}`}>
                        <div className='flex mb-2 h-40 rounded bg-slate-200 w-full'>
                            <p>MEME #2 HERE flex</p>
                        </div>
                        <div className='flex mb-2 h-40 rounded bg-slate-200 w-full'>
                            <p>MEME #2 HERE flex</p>
                        </div>
                        <div className='flex mb-2 h-40 rounded bg-slate-200 w-full'>
                            <p>MEME #2 HERE flex</p>
                        </div>
                        <div className='flex mb-2 h-40 rounded bg-slate-200 w-full'>
                            <p>MEME #2 HERE flex</p>
                        </div>
                    </div>

                    {/* You can uncomment and continue this section with additional content as needed */}
                </div>
            </section>
        </section >
    );
};

export default Body;
