import React from 'react'
import Image from "next/image"
function About() {
    return (
        <div className="mx-10 my-20 p-10 flex items-center" id="about">
            <div className="flex-shrink-0">
                <Image
                    src="/../public/images/About.jpg"
                    height={500}
                    width={500}
                    alt="About Image"
                />
            </div>
            <div className="ml-10">
                <h3 className="text-lg text-gray-500 tracking-wider">ABOUT ME</h3>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 text-gray-800">Hi, I am Harpreet Singh!</h1>
                <p className="text-lg text-gray-700 mt-8">I am a Full Stack web3 developer with expertise in React, NextJS, and Solidity for smart contracts. I specialize in integrating smart contracts to frontend using EthersJs and wagmi.
                    <br />
                    <br />
                    I use Slither and Echidna for auditing and ensuring that the code is secure and efficient. I am passionate about web3 and want to onboard more people to this exciting new technology to make it normal among people.
                    <br />
                    <br />
                    I believe in consistent and persistent efforts to achieve my goals, and I am always up for a new challenge. There is nothing quite like the happiness I feel after overcoming a tough obstacle.</p>
            </div>
        </div>

    )
}

export default About