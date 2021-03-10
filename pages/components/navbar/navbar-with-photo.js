import { useFormik, FieldArray } from 'formik';

import NavbarWithPhoto from './../../../components/NavbarWithPhoto';

import GroupForm from './../../../components/Form/GroupForm';
import TextOneColumn from './../../../components/Form/TextOneColumn';
import TextTwoColumns from './../../../components/Form/TextTwoColumns';

const NavbarWithPhotoPage = () => {

    const formik = useFormik({
        initialValues: {
            srcDesktopLogo: "https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg",
            srcMobileLogo: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
            altLogo: 'Company Logo',

            desktopCurrentPageClasses: 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium',
            desktopDefaultPageClasses: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
            
            mobileCurrentPageClasses: "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium",
            mobileDefaultPageClasses: "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",
            mobileMenuButtonClasses: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
            
            profileDropdownMainClasses: 'ml-3 relative',
            profileDropdownImageSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            profileDropdownImageAlt: 'Profile Photo Menu',
            profileDropdownImageButtonClasses: "bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
            profileDropdownImageClasses: "h-8 w-8 rounded-full",
            profileDropdownPathClasses: 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100',
            profileDropdownGroupClasses: 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none',
        
            pages: [
                { name: 'Dashboard', href: '#' },
                { name: 'Team', href: '#' },
                { name: 'Projects', href: '#' },
                { name: 'Calendar', href: '#' }
            ]
        }
    });

    const logo = {
        desktopSrc: formik.values.srcDesktopLogo,
        mobileSrc: formik.values.srcMobileLogo,
        alt: formik.values.altLogo
    }

    const pageLinks = formik.values.pages

    const desktopMenu = {
        desktopCurrentPageClasses: formik.values.desktopCurrentPageClasses,
        desktopDefaultPageClasses: formik.values.desktopDefaultPageClasses,
    }

    const responsiveMenu = {
        responsiveCurrentPageClasses: formik.values.mobileCurrentPageClasses,
        responsiveDefaultPageClasses: formik.values.mobileDefaultPageClasses,
        menuButtonClasses: formik.values.mobileMenuButtonClasses
    }

    const profileDropdown = {
        mainDivClasses: formik.values.profileDropdownMainClasses,

        image: {
            src: formik.values.profileDropdownImageSrc,
            alt: formik.values.profileDropdownImageAlt,
            buttonClasses: formik.values.profileDropdownImageButtonClasses,
            imageClasses: formik.values.profileDropdownImageClasses,
        },

        navigation: {
            paths: [
                { name: 'Your Profile', href: '#' },
                { name: 'Settings', href: '#' },
                { name: 'Sign out', href: '#' },
            ],

            pathClasses: formik.values.profileDropdownPathClasses,
            groupClasses: formik.values.profileDropdownGroupClasses
        }
    }


    console.log(formik.values);
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

            {/*https://tailwindcomponents.com/component/account-setting-2*/}
            <div className="bg-gray-200 min-h-screen pt-2 font-mono">
                <div className="container mx-auto">
                    <div className="inputs w-full max-w-2xl p-6 mx-auto">
                        <h2 className="text-2xl text-gray-900">Navbar With Photo - Playground</h2>


                        <form className="mt-6 pt-4">
                            <GroupForm name='Logo'>
                                <TextOneColumn value={formik.values.srcDesktopLogo} onChange={formik.handleChange} labelText='src desktop logo' id='srcDesktopLogo' />
                                <TextOneColumn value={formik.values.srcMobileLogo} onChange={formik.handleChange} labelText='src mobile logo' id='srcMobileLogo' />
                                <TextOneColumn value={formik.values.altLogo} onChange={formik.handleChange} labelText='Alternative Text' id='altLogo' />
                            </GroupForm>

                            <GroupForm name='Pages'>
                                <TextTwoColumns 
                                    left={ {value: formik.values, labelText:'Page Name', id:'pageName0'} } 
                                    right={ {value: formik.values, labelText:'Page Href', id:'pageHref0'} } 
                                    onChange={formik.handleChange} />
                            </GroupForm>


                            <GroupForm name='Desktop Menu'>
                                <TextOneColumn value={formik.values.desktopCurrentPageClasses} onChange={formik.handleChange} labelText='Current Page Classes' id='desktopCurrentPageClasses' />
                                <TextOneColumn value={formik.values.desktopDefaultPageClasses} onChange={formik.handleChange} labelText='Default Page Classes' id='desktopDefaultPageClasses' />
                            </GroupForm>

                            <GroupForm name='Responsive Menu'>
                                <TextOneColumn value={formik.values.mobileCurrentPageClasses} onChange={formik.handleChange} labelText='Current Page Classes' id='mobileCurrentPageClasses' />
                                <TextOneColumn value={formik.values.mobileDefaultPageClasses} onChange={formik.handleChange} labelText='Default Page Classes' id='mobileDefaultPageClasses' />
                                <TextOneColumn value={formik.values.mobileMenuButtonClasses} onChange={formik.handleChange} labelText='Menu Button Classes' id='mobileMenuButtonClasses' />
                            </GroupForm>

                            <GroupForm name='Profile Dropdown'>
                                <TextOneColumn value={formik.values.profileDropdownMainClasses} onChange={formik.handleChange} labelText='Main Div Classes NÃO ATUALIZA' id='profileDropdownMainDivClasses' />
                                <TextOneColumn value={formik.values.profileDropdownImageSrc} onChange={formik.handleChange} labelText='Image Src' id='profileDropdownImageSrc' />
                                <TextOneColumn value={formik.values.profileDropdownImageAlt} onChange={formik.handleChange} labelText='Image Alt' id='profileDropdownImageAlt' />
                                <TextOneColumn value={formik.values.profileDropdownImageButtonClasses} onChange={formik.handleChange} labelText='Button Classes NÃO ATUALIZA' id='profileDropdownButtonClasses' />
                                <TextOneColumn value={formik.values.profileDropdownImageClasses} onChange={formik.handleChange} labelText='Image Classes' id='profileDropdownImageClasses' />
                                
                                <div className="flex items-center justify-between mt-4">
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label
                                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                                        >
                                            Page Name
                                    </label>
                                        <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                                    </div>
                                    <div className='w-full md:w-1/2 px-3 mb-6'>
                                        <label
                                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                                        >
                                            Page Path
                                        </label>
                                        <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' required />
                                    </div>
                                </div>

                                <TextOneColumn value={formik.values.profileDropdownPathClasses} onChange={formik.handleChange} labelText='Path Classes' id='profileDropdownPathClasses' />
                                <TextOneColumn value={formik.values.profileDropdownGroupClasses} onChange={formik.handleChange} labelText='Group Classes' id='profileDropdownGroupClasses' />
                            </GroupForm>




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