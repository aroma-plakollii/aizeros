import React from 'react';
import Link from 'next/link';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const navItems = [
        { name: 'Home', href: '/', active: true },
        { name: 'Services', href: '/services', active: false },
        { name: 'Portfolio', href: '/portfolio', active: false },
        { name: 'About us', href: '/about-us', active: false },
        { name: 'Contact us', href: '/contact', active: false },
    ];

    return (
        <div
            className={`
                fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center 
                transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
            `}
        >
            <nav
                className={`
                    flex flex-col items-center bg-white/5 backdrop-blur-md rounded-[32px] border border-white/10 p-3 box-border w-[220px] gap-3
                    transition-all duration-300 ease-out delay-75
                    ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'}
                `}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={onClose}
                        className={`
                            font-medium transition-colors whitespace-nowrap flex items-center justify-center w-full h-[50px] text-base
                            ${item.active
                                ? 'bg-white text-black rounded-[24px]'
                                : 'text-white hover:text-gray-300'
                            }
                        `}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default MobileMenu;
