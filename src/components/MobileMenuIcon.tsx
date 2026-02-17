import React from 'react';

interface MobileMenuIconProps {
    onClick?: () => void;
}

const MobileMenuIcon: React.FC<MobileMenuIconProps> = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: '20px',
                height: '18px',
                cursor: 'pointer'
            }}
        >
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="2" rx="1" fill="white" />
                <rect y="8" width="20" height="2" rx="1" fill="white" />
                <rect y="16" width="20" height="2" rx="1" fill="white" />
            </svg>
        </div>
    );
};

export default MobileMenuIcon;
