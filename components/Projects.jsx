import React from 'react'
import ProjectCard from './ProjectCard'
function Projects() {
    return (
        <div id="projects" className='projects'>
            <div className='projects_div'>
                <h1>Personal Projects</h1>
                <div className='projects-cards'>
                    <ProjectCard name="Vesting Contract" src="https://vesting-dapp-eta.vercel.app/" github="https://github.com/HAPPYS1NGH/Vesting-Dapp" description="This is a Vesting Dapp which allows organisations to register their token and manage the stakeholders with different roles along with Whitelisting and locking the tokens for a certain time." img="c-1" />
                    <ProjectCard name="Contract Insurance Provider" src="https://github.com/HAPPYS1NGH/Token-Insurance" github="https://github.com/HAPPYS1NGH/Insurance-Provider-Hardhat" description="This contract allows the people to insure their contracts with the funds.It also have a token insurance contract which will insure the tokens according to plan value for specific time. Whenever the price of asset falls , the claim can be made for the loss of amount of tokens" img="c-2" />
                    <ProjectCard name="Tenzies" src="https://happys1ngh.github.io/Tenzies/" github="https://github.com/HAPPYS1NGH/Tenzies" description="This is a Tenzies Game made while learning React where a player wins if all the boxes are done" img="c-3" />
                    <ProjectCard name="Happing Domain Service" src="https://replit.com/@HAPPYS1NGH/happy-domain" github="https://github.com/HAPPYS1NGH/happy-domains" description="This is a domain naming service just like ENS on polygon mumbai testnet which mints the nft for an address and records the value." img="c-4" />
                </div>
            </div>
        </div>
    )
}

export default Projects