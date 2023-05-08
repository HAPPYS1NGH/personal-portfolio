import React from 'react'
import ProjectCard from './ProjectCard'
function Projects() {
    return (
        <div id="projects" className='projects'>
            <div className='projects_div'>
                <h1>Personal Projects</h1>
                <div className='projects-cards'>
                    <ProjectCard name="Vesting Contract" src="https://vesting-dapp-eta.vercel.app/" github="https://github.com/HAPPYS1NGH/Vesting-Dapp" description="Vesting Dapp is a decentralized application that allows organizations to register their token and manage stakeholders with different roles, as well as whitelist and lock tokens for a certain period. This platform provides a comprehensive solution for managing token vesting schedules, enabling organizations to ensure that their stakeholders receive their tokens in a timely and secure manner." img="c-1" />
                    <ProjectCard name="Contract Insurance Provider" src="https://github.com/HAPPYS1NGH/Token-Insurance" github="https://github.com/HAPPYS1NGH/Insurance-Provider-Hardhat" description="Contract Insurance is a decentralized insurance platform that allows people to insure their contracts and tokens with funds. The platform includes a token insurance contract that insures tokens based on their plan value for a specific time period. In case of a price drop in the asset, users can claim a loss of amount of tokens." img="c-2" />
                    <ProjectCard name="Tenzies" src="https://happys1ngh.github.io/Tenzies/" github="https://github.com/HAPPYS1NGH/Tenzies" description="Tenzies Game is a web-based game I created while learning React. The objective of the game is to win by completing all the boxes on the game board.To play the game, the player rolls the dice by clicking on the 'Roll Dice' button, and the number that appears on the dice is used to fill one of the empty boxes. The player continues to roll the dice until all the boxes are filled. " img="c-3" />
                    <ProjectCard name="Happing Domain Service" src="https://replit.com/@HAPPYS1NGH/happy-domain" github="https://github.com/HAPPYS1NGH/happy-domains" description="Happy Naming Service is a decentralized application built on Polygon Mumbai Testnet that functions similarly to the Ethereum Name Service (ENS). The platform enables users to register domain names for their wallet addresses and mint non-fungible tokens (NFTs) to represent ownership of the domains." img="c-4" />
                </div>
            </div>
        </div>
    )
}

export default Projects