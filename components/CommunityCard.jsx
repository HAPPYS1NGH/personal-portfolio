import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function CommunityCard(props) {
    return (
        <Link
            className={`flex items-center px-6 py-4 bg-blue-200 hover:bg-blue-300 hover:shadow-md rounded-md transition hover:translate-x-3 duration-100 ease-out lg:mx-5 my-6`}
            href={props.url}
            target='_blank'
            rel='noopener noreferrer'
        >
            <div className='flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white shadow-md'>
                <Image alt='Community Logo' src={props.image} height={40} width={40} />
            </div>
            <h1 className='ml-4 text-base sm:text-xl font-medium text-gray-800'>{props.name}</h1>
        </Link>
    );
}

export default CommunityCard;
