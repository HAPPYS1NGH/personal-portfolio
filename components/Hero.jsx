import React from "react";
import Image from 'next/image'
import Link from "next/link";

function Hero() {
  return (
    <div className="m-10 lg:mt-20 p-5 lg:p-10" id="hero">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="max-w-2xl text-center sm:text-left">
          <h3 className="text-lg text-gray-500 tracking-wider">HARPREET SINGH</h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2 text-gray-800 transition ease-in-out hover:scale-110 duration-200 lg:hover:translate-x-10">Full Stack Web3 Developer</h1>
          <p className="text-lg text-gray-700 my-6">I am a Full Stack web3 developer with expertise in React, NextJS, and Solidity for smart contracts. I specialize in integrating smart contracts to frontend using EthersJs and wagmi.</p>
          <Link href="https://ipfs.io/ipfs/bafkreicla3ncc74blhmogaacrlmijqgaz6ub5es6g2tom77ripcxdilvwm" className="px-5 py-3 rounded-xl text-white font-bold bg-red-500 hover:bg-red-600" target="_blank">See Resume</Link>
        </div>
        <div className="hidden lg:block mt-10 sm:mt-0">
          <Image className="transition ease-in-out hover:scale-105 duration-200" src="/images/rocket.png" height={500} width={500} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
