import React from 'react';

const ContactButton = () => {
    return (
        <button
            className="flex items-center justify-center bg-transparent text-white border border-white/20 rounded-[1000px] font-medium transition-colors hover:bg-white/10 h-[56px] gap-5 py-1.5 px-7"
        >
            <span>Contact us</span>
            {/* Icon */}
            <div className="flex items-center justify-center w-[18px] h-[16px]">
                {/* 
                   The user specified icon size 18x16. 
                   The previous SVG was 14x14. Use w-full h-full to fill the 18x16 container if desired,
                   or just center it. I will let it conform to the container.
                */}
                <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="2" r="1.5" fill="currentColor" />
                    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
                    <circle cx="7" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="2" cy="7" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                </svg>
            </div>
        </button>
    );
};

export default ContactButton;
