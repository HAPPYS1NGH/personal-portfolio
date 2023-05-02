import React from 'react'
import Link from "next/link"
import Image from "next/image"
function ProjectCard(props) {
    console.log(props)
    return (
        <div key={props.key} >
            <div className="relative w-full h-full content-center items-center justify-center md:h-screen">
                <div className="absolute inset-0">
                    {/* <Image
                        src={props.url}
                        alt="background image"
                        fill
                        className='hover:bg-gray-500'
                    /> */}
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full ">
                    <Link href={props.src} className="bg-cover bg-center h-80 flex flex-col justify-center items-center">
                        {/* <div className="text-center">
                            <h1 className="text-4xl font-bold mb-2">{props.name}</h1>
                            <p className="text-lg mb-4">{props.description}</p>
                            <a href={`${props.github}`} className=" py-2 px-4 rounded-full font-bold hover:bg-gray-200">
                                View Github
                            </a>
                        </div> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard