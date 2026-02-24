"use client";

import { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ContactButton from './ContactButton';
import MobileMenuIcon from './MobileMenuIcon';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 flex justify-center z-50">
            {/* 
                Desktop Container: max-w-[1320px], mt-[36px]
                Mobile Container: px-[20px], mt-[23px]
            */}
            <div
                className="flex items-center justify-between w-full px-10 lg:px-[60px] max-w-[1560px]"
            >
                {/* 
                   Logo Wrapper 
                   Desktop: Original size (243x38.12)
                   Mobile: 154.1px x 24.16px
                   Ensure z-index is higher if menu is open, or menu covers it?
                   Usually menu covers everything except maybe the close button.
                   We'll let MobileMenu cover everything, and we need a way to close it.
                   The MobileMenuIcon should probably be visible or part of the menu transition.
                   Actually, often the header buttons stay visible.
                   Let's keep the header items z-indexed if needed, but for now MobileMenu is z-40.
                   Header is z-50. So Header stays ON TOP of the menu.
                */}
                <div className="opacity-100 mt-[23px] md:mt-[36px] z-50 relative">
                    {/* Mobile Logo size */}
                    <div className="lg:hidden" style={{ width: '154.1px', height: '24.16px' }}>
                        <Logo />
                    </div>
                    {/* Desktop Logo size */}
                    <div className="hidden lg:block" style={{ width: '243px', height: '38.12px' }}>
                        <Logo />
                    </div>
                </div>

                {/* Desktop Navigation - Hidden on mobile/tablet to avoid collision */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-[36px] hidden lg:block">
                    <Navigation />
                </div>

                {/* Desktop Contact Button - Hidden on mobile/tablet */}
                <div className="mt-[36px] hidden lg:block">
                    <ContactButton />
                </div>


                {/* Mobile/Tablet Menu Icon */}
                <div className="lg:hidden mt-[26px] z-50 relative">
                    <MobileMenuIcon onClick={toggleMobileMenu} />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </header>
    );
};

export default Header;
