import React from 'react'
import '../css/FooterCSS.css'
import GitHubLogo from '../images/GitHub-Mark-32px.png'

const Footer = () => {
  return (
    <div id="footer" className='grid' style={{"--columns": "3", 'padding': "3rem"}}>
        <div className='t-center'>
            <p className='story-text' style={{"fontSize": "1rem"}}>© Copyright DimmittDome</p>
        </div>
        <div className='t-center'>
            <a href="https://github.com/JacobDDoS">
                <img src={GitHubLogo} alt="gitHub Logo" style={{"display": "inline"}} />
            </a>
        </div>
        <div className='t-center'>
            <a href="#dome" className='story-text' id="to-top-text" style={{"fontSize": "1rem"}}>Back to top</a>
        </div>
        
    </div>
  )
}

export default Footer