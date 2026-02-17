import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    const navItems = [
        { name: 'Home', href: '/', active: true },
        { name: 'Services', href: '/services', active: false },
        { name: 'Portfolio', href: '/portfolio', active: false },
        { name: 'About us', href: '/about-us', active: false },
    ];

    return (
        <nav
            className="flex items-center bg-white/5 backdrop-blur-md rounded-[100px] border border-white/10 box-border w-[454px] h-[70px] py-2 pl-2 pr-7 gap-[42px]"
        >
            {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`
                        font-medium transition-colors whitespace-nowrap flex items-center justify-center
                        ${item.active
                            ? 'bg-white text-black rounded-[100px] w-[100px] h-[53px]'
                            : 'text-white hover:text-gray-300'
                        }
                    `}
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;
