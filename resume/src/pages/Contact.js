import React, { useState } from 'react'

const Contact = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({ ...userInput, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.name && userInput.email && userInput.subject && userInput.message) {
            setUserInput({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
        }
    }


  return (
    <div className="container grid" style={{"marginBottom": "2rem"}}>
        <div style={{"margin": "auto auto"}}>
            <img src="https://www.happierhuman.com/wp-content/uploads/2019/07/joking-man.jpg?ezimgfmt=rs:400x426/rscb1" alt="Someone giving thumbs up" />
        </div>
        <div style={{"margin": "10px"}}>
            <p className="story-text">Insert something about how excited I am to be in contact with you Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, fugit!</p>
            <br />
            <form>
                <div>
                    <p className='nav-text'>Full Name:</p>
                    <input type="text" name="name" value={userInput.name} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <p className='nav-text'>Email Address</p>
                    <input type="email" name="email" value={userInput.email} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <p className='nav-text'>Subject</p>
                    <input type="text" name="subject" value={userInput.subject} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <p className='nav-text'>Message</p>
                    <textarea name="message" cols="30" rows="10" value={userInput.message} onChange={(e)=>handleChange(e)}/>
                </div>
                <button onClick={(e)=>handleSubmit(e)}>
                    Fire Away!
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact