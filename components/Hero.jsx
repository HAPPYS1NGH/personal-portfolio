import React from "react";
import Image from 'next/image'
import Link from "next/link";
function Hero() {
  return (
    <div className="m-10 mt-20 p-10" id="hero">
      <div className="flex justify-center items-center">
        <div className="max-w-2xl">
          <h3 className="text-lg text-gray-500 tracking-wider	">HARPREET SINGH</h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 text-gray-800 transition ease-in-out hover:scale-110 duration-200 hover:translate-x-10">Full Stack Web3 Developer</h1>
          <p className="text-lg text-gray-700 mt-4">I am a Full Stack web3 developer with expertise in React, NextJS, and Solidity for smart contracts. I specialize in integrating smart contracts to frontend using EthersJs and wagmi.</p>
        </div>
        <div className="hidden sm:block ml-10">
          <Image priority={false} className="transition ease-in-out hover:scale-105 duration-200" src="/../public/images/rocket.png" height={500} width={500} alt="Hero Image" />
        </div>
      </div>
      <Link href="/#projects" className="ml-6 px-5 py-3 rounded-xl  text-white font-bold bg-red-500 hover:bg-red-600">See Projects</Link>
    </div>
  );
}

export default Hero;