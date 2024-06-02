'use client';

import React, { useEffect, useState } from 'react';

export default function Admin() {
    const [reviewData, setReviewData] = useState({
        type: '',
        content: null,
        name: '',
        ticker: '',
        memeId: ''
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
            ticker: reviewData.ticker,
            memeId: reviewData.memeId
        };
        localStorage.removeItem('adminReview');
        localStorage.setItem('adminApproved', JSON.stringify(data));
        setReviewData({ type: '', content: null, name: '', ticker: '', memeId: '' });
    };

    const handleReject = () => {
        localStorage.removeItem('adminReview');
        setReviewData({ type: '', content: null, name: '', ticker: '', memeId: '' });
    };

    return (
        <div className='flex flex-col items-center justify-center p-4'>
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
            <div className='text-md font-bold mt-1'>Meme ID: {reviewData.memeId}</div>
            <div className='flex-row'>
                <button onClick={handleApprove} className="m-2 bg-green-500 rounded text-white p-2">Approve</button>
                <button onClick={handleReject} className="m-2 bg-red-500 rounded text-white p-2">Reject</button>
            </div>
        </div>
    );
}
