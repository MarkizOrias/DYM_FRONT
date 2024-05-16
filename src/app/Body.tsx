"use client";
import AddMeme from "./AddMeme";
import React, { useState } from 'react';

type BodyProps = {
    // You can add props definitions here if needed
};

const Body: React.FC<BodyProps> = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className='flex h-svh relative'>
            <section className='hidden h-full md:flex pr-0 place-content-center w-1/4 relative justify-start px-2 py-2'>
                <div className='flex rounded w-full flex-col static p-4 bg-slate-400'>
                    <p>#RANKING#</p>
                    <div className='flex static rounded px-6 py-2 mb-2 bg-slate-200'>Search</div>
                    <div className='flex-1 static rounded px-6 py-2 bg-slate-200'>LIST</div>
                    <div className='flex-bottom static rounded px-6 py-2'>hyperlinks with page numbers here</div>
                </div>
            </section>
            <section id='section div' className='flex w-full h-full md:w-3/4 relative p-2 '>
                <div id='button and window' className='flex flex-col items-center w-full h-full justify-start rounded p-4 overflow-auto bg-slate-400 '>
                    <button
                        className='flex-col items-center mb-2 justify-center w-40 rounded bg-slate-300'
                        onClick={handleButtonClick}
                    >{isExpanded ? "Hide form" : "Add your own meme"}
                    </button>
                    <div id="expandableDiv" className={`flex flex-col items-center rounded ${isExpanded ? 'animate-expandWidthHeight overflow-auto' : ''} bg-slate-200`}>
                        {isExpanded && <AddMeme />}
                    </div>
                    <div className={`flex-col w-full overflow-y-scroll ${isExpanded ? 'hidden' : ''}`}>
                        <div className='flex mb-2 h-40 rounded bg-slate-200 w-full'>
                            <p>MEME #2 HERE flex</p>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    );
};

export default Body;
