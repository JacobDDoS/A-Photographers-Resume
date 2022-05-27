import React from 'react'
import '../css/FooterCSS.css'
import GitHubLogo from './GitHub-Mark-Light-32px.png'

const Footer = () => {
  return (
    <div id="footer" className='flex' style={{"justifyContent": "space-between", 'padding': "3rem"}}>
        <div>
            <p className='story-text' style={{"fontSize": "1rem"}}>Copyright DimmittDome</p>
        </div>
        <div>
            <a href="https://github.com/JacobDDoS">
                <img src={GitHubLogo} alt="gitHub Logo" />
            </a>
        </div>
        <div>
            <p className='story-text' style={{"fontSize": "1rem"}}>Back to the top</p>
        </div>
        
    </div>
  )
}

export default Footer