import React from 'react'
import ProjectCard from './ProjectCard'
function Projects() {
    return (
        <div id="projects" className='projects'>
            <div className='projects_div'>
                <h1>Personal Projects</h1>
                <div className='projects-cards'>
                    <ProjectCard name="Vesting Contract" src="https://vesting-dapp-eta.vercel.app/" github="https://github.com/HAPPYS1NGH/Vesting-Dapp" description="Vesting Dapp is a decentralized application for managing token vesting schedules. It enables organizations to register tokens, manage stakeholders with different roles, and lock tokens for a specified period. This platform ensures that stakeholders receive their tokens securely and on time." img="c-1" />
                    <ProjectCard name="Contract Insurance Provider" src="https://github.com/HAPPYS1NGH/Token-Insurance" github="https://github.com/HAPPYS1NGH/Insurance-Provider-Hardhat" description="\Contract Insurance is a decentralized platform for insuring contracts and tokens. Users can secure their assets by insuring them with funds. The platform offers token insurance based on plan value and allows users to claim losses in case of a price drop." img="c-2" />
                    <ProjectCard name="Tenzies" src="https://happys1ngh.github.io/Tenzies/" github="https://github.com/HAPPYS1NGH/Tenzies" description="Tenzies Game is a web-based game created using React. The goal is to fill all the boxes on the game board by rolling the dice. Players click the 'Roll Dice' button and use the number rolled to fill empty boxes. The game continues until all boxes are filled." img="c-3" />
                    <ProjectCard name="Happing Domain Service" src="https://replit.com/@HAPPYS1NGH/happy-domain" github="https://github.com/HAPPYS1NGH/happy-domains" description="Happy Naming Service is a decentralized application on Polygon Mumbai Testnet. It allows users to register domain names for their wallet addresses and mint NFTs as ownership proof, similar to Ethereum Name Service (ENS)." img="c-4" />
                </div>
            </div>
        </div>
    )
}

export default Projects