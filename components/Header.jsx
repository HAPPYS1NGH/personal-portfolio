import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function Header() {
    return (
        <>
            <div className='bg-gray-800 py-4'>
                <div className='container mx-auto px-4 flex justify-between items-center'>
                    <div>
                        <Link href='/#hero'
                            className='text-white font-bold text-lg'>Harpreet Singh
                        </Link>
                    </div>
                    <ul className='flex items-center'>
                        <li className='mr-6'>
                            <Link href='/#about'
                                className='text-gray-300 hover:text-white font-medium text-sm'>
                                About
                            </Link>
                        </li>
                        <li className='mr-6'>
                            <Link href='/#projects'
                                className='text-gray-300 hover:text-white font-medium text-sm'>
                                Projects
                            </Link>
                        </li>
                        <li className='mr-6'>
                            <Link href='/#community'
                                className='text-gray-300 hover:text-white font-medium text-sm'>
                                Community
                            </Link>
                        </li>
                        <li className='mr-6'>
                            <Link href='https://happys1ngh.hashnode.dev/' target='_blank'
                                className='text-gray-300 hover:text-white font-medium text-sm'>
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link href='/#contact'
                                className='bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 font-medium text-sm'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
