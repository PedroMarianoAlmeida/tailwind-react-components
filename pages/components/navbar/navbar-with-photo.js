import NavbarWithPhoto from './../../../components/NavbarWithPhoto';

const NavbarWithPhotoPage = () => {

    const logo = {
        mobileSrc: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
        desktopSrc: "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",
        alt: 'Company Logo'
    }

    const pageLinks = [
        { name: 'Dashboard', href: '#' },
        { name: 'Team', href: '#' },
        { name: 'Projects', href: '#' },
        { name: 'Calendar', href: '#' }
    ]

    const desktopMenu = {
        currentPageClasses: 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium',
        defaultPageClasses: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    }

    const responsiveMenu = {
        currentPageClasses: "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
        defaultPageClasses: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
        menuButtonClasses: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    }

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

    return (
        <>
            <h1>Navbar With Photo</h1>

            <NavbarWithPhoto
                profileDropdown={profileDropdown}
                pageLinks={pageLinks}
                responsiveMenu={responsiveMenu}
                desktopMenu={desktopMenu}
                logo={logo}
                currentPage='Dashboard'
            />

            <div class="bg-gray-200 min-h-screen pt-2 font-mono">
                <div class="container mx-auto">
                    <div class="inputs w-full max-w-2xl p-6 mx-auto">
                        <h2 class="text-2xl text-gray-900">Navbar With Photo - Playground</h2>


                        <form class="mt-6 pt-4">

                            <div class="personal w-full border-t border-gray-400 pt-4">
                                <h2 class="text-2xl text-gray-900">Logo:</h2>
                                
                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>src desktop logo</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>src mobile logo</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Alternative Text</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>
                                
                            </div>

                            <div class="personal w-full border-t border-gray-400 pt-4">
                                <h2 class="text-2xl text-gray-900">Pages:</h2>

                                <div class="flex items-center justify-between mt-4">
                                    <div class='w-full md:w-1/2 px-3 mb-6'>
                                        <label
                                            class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                                        >
                                            Page Name
                                    </label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                                    </div>
                                    <div class='w-full md:w-1/2 px-3 mb-6'>
                                        <label
                                            class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                                        >
                                            Page Path
                                        </label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                                    </div>
                                </div>
                            </div>

                            <div class="personal w-full border-t border-gray-400 pt-4">
                                <h2 class="text-2xl text-gray-900">Desktop Menu:</h2>
                                
                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Current Page Classes</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Default Page Classes</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>
                                
                            </div>

                            <div class="personal w-full border-t border-gray-400 pt-4">
                                <h2 class="text-2xl text-gray-900">Responsive Menu:</h2>
                                
                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Current Page Classes</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Default Page Classes</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>
                                
                            </div>

                            <div class="personal w-full border-t border-gray-400 pt-4">
                                <h2 class="text-2xl text-gray-900">Profile Dropdown:</h2>
                                
                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Main Div Classes</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Image Src</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Image Alt</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Button Classes</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Image Classes</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class="flex items-center justify-between mt-4">
                                    <div class='w-full md:w-1/2 px-3 mb-6'>
                                        <label
                                            class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                                        >
                                            Page Name
                                    </label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                                    </div>
                                    <div class='w-full md:w-1/2 px-3 mb-6'>
                                        <label
                                            class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                                        >
                                            Page Path
                                        </label>
                                        <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                                    </div>
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Path Classes</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>

                                <div class='w-full md:w-full px-3 my-2'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>Group Classes</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' required />
                                </div>
                                
                            </div>


                        </form>
                    </div>
                </div>
            </div>


            <a
                href='https://tailwindui.com/components/application-ui/navigation/navbars#component-70a9bdf83ef2c8568c5cddf6c39c2331'
                target='_blank'
                rel='noreferrer noopener'
            >
                Source
            </a>
        </>
    )
}

export default NavbarWithPhotoPage