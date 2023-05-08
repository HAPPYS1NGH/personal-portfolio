import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Header() {
    return (
        <>
            <div className=' bg-slate-800 py-4'>

                <div className='container mx-auto px-4 flex justify-between items-center'>
                    <div>
                        <Link href='/#hero'
                            className='text-white font-bold text-xl'>Harpreet Singh
                        </Link>
                    </div>
                    <ul className='flex items-center'>
                        <li className='mr-6'>
                            <Link href='/#about'
                                className='text-gray-300 hover:text-white font-medium text-md'>
                                About
                            </Link>
                        </li>
                        <li className='mr-6'>
                            <Link href='/#projects'
                                className='text-gray-300 hover:text-white font-medium text-md'>
                                Projects
                            </Link>
                        </li>
                        <li className='mr-6'>
                            <Link href='/#community'
                                className='text-gray-300 hover:text-white font-medium text-md'>
                                Community
                            </Link>
                        </li>
                        <li className='mr-6'>
                            <Link href='https://happys1ngh.hashnode.dev/' target='_blank'
                                className='text-gray-300 hover:text-white font-medium text-md'>
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <div
                                className=''>
                                <ConnectButton chainStatus="icon" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;
