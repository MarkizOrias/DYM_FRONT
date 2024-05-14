import React from 'react';

type FooterProps = {
    // You can define props here if needed
};

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className='flex mt-0 bottom-0'>
            <div>
                <p>Footer @All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;