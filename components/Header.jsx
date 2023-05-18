import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='bg-slate-800 py-4'>
                <div className='container mx-auto px-4 flex justify-between items-center'>
                    <div>
                        <Link href='/#hero' className='text-white font-bold text-xl'>
                            Harpreet Singh
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <ul className={`hidden md:flex md:items-center`}>
                            <li className='mr-6'>
                                <Link
                                    href='/#about'
                                    className='text-gray-300 hover:text-white font-medium text-md'
                                >
                                    About
                                </Link>
                            </li>
                            <li className='mr-6'>
                                <Link
                                    href='/#projects'
                                    className='text-gray-300 hover:text-white font-medium text-md'
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className='mr-6'>
                                <Link
                                    href='/#community'
                                    className='text-gray-300 hover:text-white font-medium text-md'
                                >
                                    Community
                                </Link>
                            </li>
                            <li className='mr-6'>
                                <Link
                                    href='https://happys1ngh.hashnode.dev/'
                                    target='_blank'
                                    className='text-gray-300 hover:text-white font-medium text-md'
                                >
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <div>
                                    <ConnectButton chainStatus='icon' />
                                </div>
                            </li>
                        </ul>
                        <div className='md:hidden ml-auto'>
                            <button
                                className='text-white cursor-pointer'
                                onClick={toggleMenu}
                            >
                                <i className='fas fa-bars'></i>
                            </button>
                        </div>
                    </div>
                </div>
                <ul
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } md:hidden text-center`}
                >
                    <li className='py-2'>
                        <Link
                            href='/#about'
                            className='text-gray-300 hover:text-white font-medium text-md'
                        >
                            About
                        </Link>
                    </li>
                    <li className='py-2'>
                        <Link
                            href='/#projects'
                            className='text-gray-300 hover:text-white font-medium text-md'
                        >
                            Projects
                        </Link>
                    </li>
                    <li className='py-2'>
                        <Link
                            href='/#community'
                            className='text-gray-300 hover:text-white font-medium text-md'
                        >
                            Community
                        </Link>
                    </li>
                    <li className='py-2'>
                        <Link
                            href='https://happys1ngh.hashnode.dev/'
                            target='_blank'
                            className='text-gray-300 hover:text-white font-medium text-md'
                        >
                            Blogs
                        </Link>
                    </li>
                    <li className='py-2'>
                        <div className='flex justify-center'>
                            <ConnectButton chainStatus='icon' />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
``
