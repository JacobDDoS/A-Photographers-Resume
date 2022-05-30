import React from 'react'

const About = () => {
  return (
    <div className="container grid" style={{"marginBottom": "2rem", "minHeight": "99%"}}>
        <div style={{"margin": "auto auto"}}>
            <img src="https://compote.slate.com/images/2e4e8ef6-038d-46b9-a81a-775ed288c2d9.gif" alt="Someone giving thumbs up" />
        </div>
        <div style={{"margin": "10px"}}>
            <h2 className='heading-2'>Whoami</h2>
            <p className="story-text">I am whoever you want me to be. Born and raised in some place at some time, idk Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque quibusdam voluptas.</p>
        </div>

        <div style={{"margin": "10px"}}>
            <h2 className="heading-2" style={{"textDecoration": "underline"}}>Previous Work Experience</h2>
            <ul>
                <li className="story-text">Lorem, ipsum dolor.</li>
                <li className="story-text">Lorem, ipsum dolor.</li>
                <li className="story-text">Lorem, ipsum dolor.</li>
            </ul>
        </div>
        <div style={{"margin": "10px"}}>
            <h2 className='heading-2' style={{"textDecoration": "underline"}}>Education</h2>
            <ul>
                <li className="story-text">Lorem, ipsum dolor.</li>
                <li className="story-text">Lorem, ipsum dolor.</li>
                <li className="story-text">Lorem, ipsum dolor.</li>
            </ul>
        </div>
    </div>
  )
}

export default About