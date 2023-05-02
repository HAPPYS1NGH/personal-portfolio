import React from 'react'
import ProjectCard from './ProjectCard'
function Projects() {
    return (
        <div id="projects">
            <div className='grid grid-cols-2 gap-4'>
                <ProjectCard key="1" name="Vesting Contract" src="https://vesting-dapp-eta.vercel.app/" github="https://github.com/HAPPYS1NGH/Vesting-Dapp" description="This is a Vesting Dapp which allows organisations to register their token and manage the stakeholders with different roles along with Whitelisting and locking the tokens for a certain time." url="/../public/images/Hero-img.png" />
            </div>

        </div>
    )
}

export default Projects