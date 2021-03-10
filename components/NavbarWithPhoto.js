//Source: https://tailwindui.com/components/application-ui/navigation/navbars#component-70a9bdf83ef2c8568c5cddf6c39c2331
import { useState } from 'react'

const ProfileDropdown = ({ profileDropdown }) => {
    const [showLoginMenu, setShowLoginMenu] = useState(false);

    return (
        <div className={profileDropdown.mainDivClasses}>
            <div>
                <button
                    type="button"
                    className={profileDropdown.image.buttonClasses}
                    id="user-menu"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setShowLoginMenu(!showLoginMenu)}
                >
                    <span className="sr-only">Open user menu</span>
                    <img
                        className={profileDropdown.image.imageClasses}
                        src={profileDropdown.image.src}
                        alt={profileDropdown.image.alt}
                    />
                </button>
            </div>

            <div
                className={`${showLoginMenu ? 'visible' : 'hidden'} ${profileDropdown.navigation.groupClasses}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
            //onBlur={() => setShowLoginMenu(false)}
            >
                {
                    profileDropdown.navigation.paths.map((path) => (
                        <a
                            key={path.name}
                            href={path.href}
                            className={profileDropdown.navigation.pathClasses}
                            role="menuitem"
                        >
                            {path.name}
                        </a>

                    ))
                }
            </div>

        </div>
    );
}

const MobileButton = ({ showResponsiveMenu, setShowResponsiveMenu, responsiveMenu }) => {
    return (
        <>
            <button
                type="button"
                className={responsiveMenu.menuButtonClasses}
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
            >
                <span className="sr-only">Open main menu</span>
                {/*Heroicon name: outline/menu*/}
                <svg className={`${showResponsiveMenu ? 'hidden' : 'visible'} block h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                {/*Heroicon name: outline/x*/}
                <svg className={`${showResponsiveMenu ? 'visible' : 'hidden'} block h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>

            </button>
        </>
    )
}

const MobilePages = ({ showResponsiveMenu, pageLinks, responsiveMenu, currentPage }) => {
    return (
        <div className={`${showResponsiveMenu ? 'visible' : 'hidden'} sm:hidden`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {
                    pageLinks.map(page => (
                        <a
                            href={page.href}
                            className={
                                page.name === currentPage ?
                                    responsiveMenu.responsiveCurrentPageClasses :
                                    responsiveMenu.responsiveDefaultPageClasses
                            }
                        >
                            {page.name}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

const DesktopPages = ({ pageLinks, desktopMenu, currentPage }) => {

    return (
        <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
                {
                    pageLinks.map(page => (
                        <a
                            href={page.href}
                            className={
                                page.name === currentPage ?
                                    desktopMenu.desktopCurrentPageClasses :
                                    desktopMenu.desktopDefaultPageClasses
                            }
                        >
                            {page.name}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

const Logo = ({ logo }) => {

    return (
        <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-8 w-auto" src={logo.mobileSrc} alt={logo.alt} />
            <img className="hidden lg:block h-8 w-auto" src={logo.desktopSrc} alt={logo.alt} />
        </div>
    )
}

const BellAlert = () => {
    //Not fully implemented    
    return (
        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>

            {/*Heroicon name: outline/bell*/}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        </button>
    )
}

const NavbarWithPhoto = ({ currentPage, profileDropdown, pageLinks, responsiveMenu, desktopMenu, logo }) => {
    const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <MobileButton
                            showResponsiveMenu={showResponsiveMenu}
                            setShowResponsiveMenu={setShowResponsiveMenu}
                            responsiveMenu={responsiveMenu}
                        />
                    </div>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Logo logo={logo} />
                        <DesktopPages pageLinks={pageLinks} desktopMenu={desktopMenu} currentPage={currentPage} />
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <BellAlert />
                        <ProfileDropdown profileDropdown={profileDropdown} />
                    </div>
                </div>
            </div>

            <MobilePages
                showResponsiveMenu={showResponsiveMenu}
                pageLinks={pageLinks}
                responsiveMenu={responsiveMenu}
            />

        </nav>
    )
}

export default NavbarWithPhoto;