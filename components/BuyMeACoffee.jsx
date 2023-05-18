import Link from 'next/link'
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSendTransaction, usePrepareSendTransaction, useAccount } from 'wagmi'
import { ethers } from 'ethers';

function BuyMeACoffee() {
    const { address, isConnecting, isDisconnected } = useAccount()
    const { BigNumber } = ethers;
    const { sendTransaction } = useSendTransaction({
        mode: 'recklesslyUnprepared',
        request: {
            to: '0xaC56f7199E5D5361c7Ed75EB6C5B0608eFACc4b0',
            value: BigNumber.from('10000000000000000'),
        },
    })
    return (
        <div className='text-center flex flex-col justify-center lg:mx-32 lg:p-10 mx-10 p-1  bg-slate-300'>
            <h1 className='text-2xl  sm:text-4xl md:text-5xl p-5 lg:text-6xl font-bold '>Lets Connect</h1>
            <div className='m-auto lg:p-5 hidden lg:block'>
                {
                    isDisconnected ?
                        <div>
                            <ConnectButton accountStatus={{
                                smallScreen: 'avatar',
                                largeScreen: 'full',
                            }} chainStatus="icon" showBalance={{
                                smallScreen: false,
                                largeScreen: true,
                            }} />
                        </div>
                        :
                        sendTransaction &&
                        <Link className='lg:p-3 rounded-xl bg-green-400' disabled={!sendTransaction} href="https://www.lensfrens.xyz/happysingh.lens" >
                            Connect on Lens
                        </Link>

                }

            </div>
        </div>
    )
}

export default BuyMeACoffee