import React from 'react'
import Image from "next/image"
function About() {
    return (
        <div className="mx-10 my-20 p-10 flex items-center " id="about">
            <div className="flex-shrink-0">
                <Image
                    className='transition ease-in-out hover:scale-105 duration-200'
                    src="/images/About.jpg"
                    height={500}
                    width={500}
                    alt="About Image"
                />
            </div>
            <div className="ml-10">
                <h3 className="text-lg text-gray-500 tracking-wider">ABOUT ME</h3>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 text-gray-800 transition ease-in-out hover:scale-110 duration-200 hover:translate-x-10 ">Hi, I am Harpreet Singh!</h1>
                <p className="text-lg text-gray-700 mt-8">I am a Full Stack Web3 Developer with a passion for creating decentralized applications that solve real-world problems. My journey in the blockchain industry started with Ethereum, and since then, I have been fascinated by the potential of blockchain technology to revolutionize industries and empower individuals.</p>
                <p className="text-lg text-gray-700 mt-8"> In addition to my technical skills, I am a strong believer in the importance of community and collaboration in the blockchain industry. I actively contribute to open-source projects and participate in hackathons and meetups to stay up-to-date with the latest developments and network with like-minded individuals.</p>
                <p className="text-lg text-gray-700 mt-8">
                    I believe in consistent and persistent efforts to achieve my goals, and I am always up for a new challenge. There is nothing quite like the happiness I feel after overcoming a tough obstacle.</p>

            </div>
        </div>

    )
}

export default About