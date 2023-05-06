import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function CommunityCard(props) {
    return (
        <Link className='flex justify-center items-center px-14 py-7 bg-gray-200' href={props.url}>
            <Image alt="Community Logo" src={props.image} height={50} width={50} />
            <h1 className='ml-10 text-3xl text-center'>{props.name}</h1>
        </Link>
    )
}

export default CommunityCard