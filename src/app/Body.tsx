'use client';
import React, { useState, useEffect } from 'react';
import AddMeme from "./AddMeme";

type BodyProps = {};

const Body: React.FC<BodyProps> = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [approvedData, setApprovedData] = useState<{ type: string; content: string | null }>({ type: '', content: null });

    useEffect(() => {
        const data = localStorage.getItem('adminApproved');
        if (data) {
            setApprovedData(JSON.parse(data));
        }
    }, []);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    const closeModal = () => {
        setIsExpanded(false);
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
            <section id='section div' className='flex w-full h-full md:w-3/4 relative p-2'>
                <div id='button and window' className='flex flex-col items-center w-full h-full justify-start rounded p-4 overflow-auto bg-slate-400'>
                    <button
                        className='flex-col items-center mb-2 justify-center w-40 rounded bg-slate-300'
                        onClick={handleButtonClick}
                    >{isExpanded ? "Hide form" : "Add your own meme"}
                    </button>
                    <div id="expandableDiv" className={`flex flex-col items-center rounded ${isExpanded ? 'animate-expandWidthHeight overflow-auto' : ''} bg-slate-200`}>
                        {isExpanded && <AddMeme closeModal={closeModal} />}
                    </div>
                    <div className={`flex-col w-full overflow-y-scroll ${isExpanded ? 'hidden' : ''}`}>
                        <div className='flex flex-col mb-2 rounded static bg-slate-200 w-full'>
                            <div className='flex m-2 rounded bg-slate-600'>
                                {approvedData.content ? (
                                    approvedData.type === 'image' ? (
                                        <img src={approvedData.content} alt="Admin Approved" className="max-w-full max-h-full object-contain rounded" />
                                    ) : (
                                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${new URL(approvedData.content).searchParams.get('v')}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    )
                                ) : (
                                    <p>No content to review</p>
                                )}
                            </div>
                            <div className='flex justify-start space-x-6 m-2'>
                                <div>
                                    <p>*Like icon*</p>
                                </div>
                                <div>
                                    <p>Like</p>
                                </div>
                                <div>
                                    <p>*Fund icon*</p>
                                </div>
                                <div>
                                    <p>Fund</p>
                                </div>
                                <div>
                                    <p>*Comment icon*</p>
                                </div>
                                <div>
                                    <p>Comment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Body;