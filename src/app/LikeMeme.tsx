// Counter.js
import React, { useState } from 'react';

const LikeMeme = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const getBucket = (count: number) => {
        if (count >= 10000) return '10k+';
        if (count >= 1000) return '1k+';
        if (count >= 100) return '100+';
        if (count >= 50) return '50+';
        if (count >= 10) return '10+';
        return count.toString();
    };

    return (
        <div onClick={incrementCount} className='cursor-pointer flex items-center space-x-1'>
            <img src='/bx-heart-circle.svg' alt='Like icon' width={24} height={24} />
            <p>Like</p>
            <p>({getBucket(count)})</p>
        </div>
    );
};

export default LikeMeme;
