import React from 'react'
import '../css/StoryCSS.css'

const Story = ({img, alt_text}) => {
  return (
    <div className='story'>
        <img src={img} alt={alt_text} style={{"maxHeight": "100%"}}/>
        <h1 className='heading-2 text-dark'>Lorem, ipsum.</h1>
        <p className='story-text text-dark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos, aliquam fugiat tempora dignissimos animi quisquam quis quibusdam sunt earum.</p>
    </div>
  )
}

export default Story