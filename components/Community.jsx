import React from 'react'
import Image from 'next/image'
import CommunityCard from './CommunityCard'
function Community() {
    return (
        <div id='community' className='mx-auto lg:mb-10  pt-28 px-6 md:px-10 lg:px-20'>
            <h1 className=" lg:mb-20 text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Community</h1>
            <div className='flex lg:justify-around justify-center '>
                <div className="">
                    <CommunityCard k="20" name="Developer Dao" image="/images/D_D.png" url="https://www.developerdao.com/" />
                    <CommunityCard k="20" name="GDSC" image="/images/gdsc.png" url="https://gdsc.community.dev/amity-university-lucknow/" />
                    <CommunityCard k="20" name="LearnWeb3 Dao" image="/images/learnweb3.png" url="https://learnweb3.io/" />
                    <CommunityCard k="20" name="Alias" image="/images/alias.png" url="https://asetalias.in/" />
                </div>
                <div className="hidden md:block ml-10">
                    <Image src="/images/communit.jpg" className='transition ease-in-out hover:-translate-y-10 duration-200 hover:translate-x-10'
                        width={900} height={900}
                        alt='Community Image' />
                </div>
            </div>
        </div>

    )
}

export default Community