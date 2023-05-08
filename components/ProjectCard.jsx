import React from 'react'
import Link from "next/link"
import Image from "next/image"
import myStyles from '../styles/projectCard.module.css'
function ProjectCard(props) {
  {/* <a href={path} target="_blank" rel="noreferrer">
      <div key={key} className='project_card' style={{backgroundImage: `url(${src})`}}>
        <div className='project_cardDiv'>
          <div className='cards_div'>
            <h3> {name} </h3>
            <div className='card_about'>
              <p> {about} </p>
              <div> 
                <a href={github} target="_blank" rel="noreferrer"> 
                  <p> View Github </p> 
                  <p> <BsArrowRightShort size={"1.7em"} className="right_icon" /> </p>  
                </a>  
              </div>
            </div>
          </div>
        </div> 
      </div>
    </a> */}
  return (
    <div key={props.key} className={`project_card ${props.img}`} >
      <div className="project_cardDiv p-10">
        <Link href={props.src} target="_blank" >
          <div className={`cards_div`}>
            <h3 className="">{props.name}</h3>
            <div className={`card_about`}>
              <p className="">{props.description}</p>
            </div>
          </div>
        </Link>
        <div>
          <Link href={props.github} target="_blank" className='link-github'>
            <p className="m-12 px-10 rounded-lg py-5 bg-blue-50 inline-block ">View Github</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

