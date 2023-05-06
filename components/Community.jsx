import React from 'react'
import Image from 'next/image'
import CommunityCard from './CommunityCard'
function Community() {
    return (
        <div id='community' className=''>
            <h1>Community</h1>
            <div className='flex items-center'>
                <div>
                    <CommunityCard name="Developer Dao" src="/..public/images/About.jpg" url="https://www.developerdao.com/" />
                </div>
                <Image src="/../public/images/community.jpg" width={1000} height={1000} alt='Community Image' />
            </div>
        </div>
    )
}

export default Community