import NavbarWithPhoto from './../../../components/NavbarWithPhoto';

const NavbarWithPhotoPage = () => {

    const profileDropdown = {
        mainDivClasses: 'ml-3 relative',

        image: {
            src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            alt: 'Profile Photo Menu',
            buttonClasses: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
            imageClasses: "h-8 w-8 rounded-full",
        },

        navigation: {
            paths: [
                { name: 'Your Profile', href: '#' },
                { name: 'Settings', href: '#' },
                { name: 'Sign out', href: '#' },
            ],

            pathClasses: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
            groupClasses: 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
        }
    }

    const pageLinks = {
        pages: [
            { name: 'Dashboard', href: '#' },
            { name: 'Team', href: '#' },
            { name: 'Projects', href: '#' },
            { name: 'Calendar', href: '#' }
        ]
    }

    const responsiveMenu = {
        currentPageClasses: "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
        defaultPageClasses: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
        menuButtonClasses: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    }

    const desktopMenu = {
        currentPageClasses: 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium',
        defaultPageClasses: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    }

    const logo = {
        mobileSrc: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" ,
        desktopSrc:"https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",
        alt: 'Company Logo'
    }

    return (
        <NavbarWithPhoto
            profileDropdown={profileDropdown}
            pageLinks={pageLinks}
            responsiveMenu={responsiveMenu}
            desktopMenu={desktopMenu}
            logo={logo}
            currentPage='Dashboard'
        />
    )
}

export default NavbarWithPhotoPage