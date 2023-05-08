import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function CommunityCard(props) {
    return (
        <Link className={`flex items-center   px-10 py-4 bg-blue-200 hover:bg-blue-300 hover:shadow-md rounded-md transition hover:translate-x-3 duration-100  ease-out ml-${props.k} my-10`} href={props.url} target='_blank'>
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md">
                <Image alt="Community Logo" src={props.image} height={50} width={50} />
            </div>
            <h1 className='ml-6 text-xl font-medium text-gray-800'>{props.name}</h1>
        </Link>

    )
}

export default CommunityCard