import React from 'react'
import Image from 'next/image'
import CommunityCard from './CommunityCard'
function Community() {
    return (
        <div id='community' className='mx-auto mb-10  pt-28 px-6 md:px-10 lg:px-20'>
            <h1 className="text-3xl mb-20 sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:mb-6">Community</h1>
            <div className='flex justify-around '>
                <div className="">
                    <CommunityCard k="20" name="Developer Dao" image="/../public/images/D_D.png" url="https://www.developerdao.com/" />
                    <CommunityCard k="20" name="GDSC" image="/../public/images/gdsc.png" url="https://gdsc.community.dev/amity-university-lucknow/" />
                    <CommunityCard k="20" name="LearnWeb3 Dao" image="/../public/images/learnweb3.png" url="https://learnweb3.io/" />
                    <CommunityCard k="20" name="Alias" image="/../public/images/alias.png" url="https://asetalias.in/" />
                </div>
                <div className="hidden md:block ml-10">
                    <Image src="/../public/images/communit.jpg" className='transition ease-in-out hover:-translate-y-10 duration-200 hover:translate-x-10'
                        width={900} height={900}
                        alt='Community Image' />
                </div>
            </div>
        </div>

    )
}

export default Community