'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function Admin() {
    const [reviewData, setReviewData] = useState<{ type: string; content: string | null }>({ type: '', content: null });
    const [file, setFile] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const [videoLink, setVideoLink] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const data = localStorage.getItem('adminReview');
        if (data) {
            const parsedData = JSON.parse(data);
            setReviewData(parsedData);
            if (parsedData.type === 'image') {
                setImagePreviewUrl(parsedData.content);
            } else {
                setVideoLink(parsedData.content);
            }
        }
    }, []);

    const handleApprove = () => {
        const data = {
            type: reviewData.type,
            content: reviewData.content,
        };
        localStorage.removeItem('adminReview');
        localStorage.setItem('adminApproved', JSON.stringify(data));
        // Optionally, you might want to clear the review data or navigate away after approving
        setReviewData({ type: '', content: null });
    };

    const handleReject = () => {
        localStorage.removeItem('adminReview');
        setReviewData({ type: '', content: null }); // Clears the content from state
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
            <button onClick={handleApprove} className="m-2 bg-green-500 rounded text-white p-2">Approve</button>
            <button onClick={handleReject} className="m-2 bg-red-500 rounded text-white p-2">Reject</button>
        </div>
    );
}
