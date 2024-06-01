'use client';

import React, { useEffect, useState } from 'react';


export default function Profile() {
    const [reviewData, setReviewData] = useState({
        type: '',
        content: null,
        name: '',
        ticker: ''
    });

    useEffect(() => {
        const data = localStorage.getItem('adminReview');
        if (data) {
            const parsedData = JSON.parse(data);
            setReviewData(parsedData);
        }
    }, []);

    const handleApprove = () => {
        const data = {
            type: reviewData.type,
            content: reviewData.content,
            name: reviewData.name,
            ticker: reviewData.ticker
        };
        localStorage.removeItem('adminReview');
        localStorage.setItem('adminApproved', JSON.stringify(data));
        setReviewData({ type: '', content: null, name: '', ticker: '' });
    };

    const handleReject = () => {
        localStorage.removeItem('adminReview');
        setReviewData({ type: '', content: null, name: '', ticker: '' });
    };

    return (
        <section className='flex h-svh relative'>
            <section className='hidden h-full md:flex place-content-center relative justify-start px-2 py-2'>
                <div className='flex flex-row'>
                    <div className='w-1/3 flex flex-col items-center h-full justify-start rounded mx-2 overflow-auto bg-slate-200'>
                        <p>Posted</p>
                        {reviewData.content ? (
                            reviewData.type === 'image' ? (
                                <img src={reviewData.content} alt="Review Image" className="max-w-full max-h-full object-contain rounded" />
                            ) : (
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${new URL(reviewData.content).searchParams.get('v')}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            )
                        ) : (
                            <p>No content to review</p>
                        )}
                        <div className='text-lg font-bold mt-2'>{reviewData.name} ({reviewData.ticker})</div>
                    </div>
                    <div className='w-1/3 flex flex-col items-center h-full justify-start rounded mx-2 overflow-auto bg-slate-200'>
                        <p>Funded</p>
                    </div>
                    <div className='w-1/3 flex flex-col items-center h-full justify-start rounded mx-2 overflow-auto bg-slate-200'>
                        <p>Withdraw and claim</p>
                    </div>
                </div>
            </section>
        </section>
    );
}
