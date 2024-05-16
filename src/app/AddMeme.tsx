"use client";

import React, { useState, useRef } from 'react';

type AddMemeProps = {

};

const AddMeme: React.FC<AddMemeProps> = () => {
    const [addMemeClicked, setIsExpanded] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const [videoLink, setVideoLink] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.match('image.*')) {
                setFile(file);
                previewFile(file);
            } else {
                alert('Please drop an image file.');
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type.match('image.*')) {
                setFile(file);
                previewFile(file);
            } else {
                alert('Please select an image file.');
            }
        }
    };

    const previewFile = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVideoLink(e.target.value);
    };

    const handleDivClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className='flex flex-col w-full h-full p-4 overflow-auto'>
            <div className='animate-expandWidth flex flex-row  h-1/4 mb-2 rounded bg-slate-600'>
                <div className='flex flex-col w-1/4 items-center'>
                    <label className='m-4'>Meme's name*</label>
                    <div className='px-4 mb-4 w-full h-full'>
                        <input className='w-full h-full text-center rounded'></input>
                    </div>
                </div>
                <div className='flex flex-col w-3/4 items-center'>
                    <label className='m-4'>Description</label>
                    <div className='px-4 pl-0 mb-4 w-full h-full'>
                        <input className='w-full h-full text-center rounded'></input>
                    </div>
                </div>
            </div>
            <div className='animate-expandWidth flex flex-col p-4 h-full mb-2 rounded  bg-slate-600'>
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleDivClick}
                    className={`w-full h-full flex flex-col items-center rounded justify-center overflow-hidden ${dragging ? 'bg-red-300' : 'bg-blue-300'}`}
                >
                    {imagePreviewUrl ? (
                        <img src={imagePreviewUrl} alt="Uploaded Preview" className="max-w-full max-h-full object-contain rounded" />
                    ) : (
                        <p>{dragging ? "Drop the file here..." : "Drag and drop an image here or click to upload"}</p>
                    )}
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>
                <div className='flex flex-row'>
                    <input
                        type="text"
                        value={videoLink}
                        onChange={handleLinkChange}
                        placeholder="Or paste a YouTube link here"
                        className="mt-4 p-2 w-full rounded"
                    />
                    <button className="mt-4 ml-2 p-2 bg-blue-500 rounded text-white">Submit</button>
                </div>
            </div>
        </div>

    );
};

export default AddMeme;
