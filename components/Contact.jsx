import React from 'react'
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
function Contact() {
    return (

        <div id='contact'>
            <div className='p-5 py-10 lg:pt-36 lg:pb-10  lg:px-40 bg-slate-800 text-white'>
                <div className='flex justify-center items-center text-center'>
                    <div className='lg:text-3xl text-xl font-bold lg:m-10'>
                        <Link href="mailto:harpreetsinghxp@gmail.com">
                            <p className=''>Harpreet Singh</p>
                        </Link>
                    </div>
                    <div className='ml-auto lg:space-x-5'>
                        <Link href="https://www.linkedin.com/in/happys1ngh/" ><i className="fa-brands fa-linkedin text-3xl transition hover:-translate-y-1 duration-100 hover:scale-110  ease-out lg:p-4 m-2"></i></Link>
                        <Link href="https://twitter.com/happys1ngh" ><i className="fa-brands fa-twitter text-3xl transition hover:-translate-y-1 duration-100 hover:scale-110  ease-out lg:p-4 m-2 "></i></Link>
                        <Link href="https://github.com/HAPPYS1NGH" ><i className="fa-brands fa-github text-3xl transition hover:-translate-y-1 duration-100 hover:scale-110  ease-out lg:p-4 m-2 "></i></Link>
                        <Link href="https://happys1ngh.hashnode.dev/" ><i className="fa-brands fa-hashnode text-3xl transition hover:-translate-y-1 duration-100 hover:scale-110  ease-out lg:p-4 m-2 "></i></Link>
                    </div>
                </div>
                <br />
                {/* <div className=' text-center'><i class="fa-regular fa-copyright"></i> 2023, All rights Reserved</div> */}
            </div>
        </div>
    )
}

export default Contact
