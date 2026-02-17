import React from 'react';

const Logo = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 243 38.12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="AIZEROS Logo"
            >
                {/* 'AIZER' - Clean Thin Sans-Serif */}
                <text
                    x="0"
                    y="32"
                    fill="white"
                    fontFamily="Arial, sans-serif"
                    fontWeight="100"
                    fontSize="38"
                    letterSpacing="8"
                >
                    AIZER
                </text>

                {/* The Blue Mark (split circle/abstract O) - Replacing the 'O' 
            Approximate position based on 'AIZER' width + spacing.
            'AIZER' approx width ~140px. 
        */}
                <g transform="translate(155, 0)">
                    {/* Left part of the blue mark (crescent/semi-circle) */}
                    <path
                        d="M15 19C15 8.5 23.5 0 34 0V38C23.5 38 15 29.5 15 19Z"
                        fill="#0000FF"
                    />
                    <path
                        d="M10 19C10 11 15 3 20 3V35C15 35 10 27 10 19Z"
                        fill="#0022FF"
                    />
                    {/* Main blue circle part */}
                    <circle cx="55" cy="19" r="19" fill="#0066FF" />
                </g>

                {/* 'S' */}
                <text
                    x="215"
                    y="32"
                    fill="white"
                    fontFamily="Arial, sans-serif"
                    fontWeight="100"
                    fontSize="38"
                    letterSpacing="8"
                >
                    S
                </text>
            </svg>
        </div>
    );
};

export default Logo;
