import React from 'react'
import Story from '../components/Story'
import '../css/HomeCSS.css'

const Home = () => {
  const storyData = [
      {img: "https://www.brides.com/thmb/aGx9zH2OIn3Ty0NkdmCYfdAV288=/500x350/filters:no_upscale():max_bytes(200000):strip_icc()/sq-31f5fa60d73f45e48d92aa6e7ae7ed69.jpg", alt_text: "Wedding couple on the mountains", id: 1}, 
      {img: "https://cdn.pixabay.com/photo/2018/11/03/20/50/wedding-3792791_1280.jpg", alt_text: "A happy couple looking at the camera", id: 2},
      {img: "https://cdn.pixabay.com/photo/2020/08/31/20/42/happy-couple-5533607_1280.jpg", alt_text: "Wedding couple walking on a dirt path through some fields", id: 3}, 
      {img: "https://www.stockvault.net/data/2015/08/20/176906/preview16.jpg", alt_text: "A wedding couple embracing each other", id: 4},
  ]
  return (
      <div id='wrapper' style={{"--container-space": "10rem"}}>
        <div className="full-container" style={{"height": "80vh"}}>
            <div className="photo-container">
                <div>
                    <h1 className='heading-1 text-white' style={{"fontSize": "80px"}}>Love</h1>
                    <p className='text-white body-text'>More than just a photo</p>
                </div>
            </div>
        </div>

        <div className="container" style={{"borderBottom": "2px solid gray", "marginTop": "6rem"}}></div>

        <div className="full-container grid">
            <div className="container flex" style={{"justifyContent": "center", "flexDirection": "column"}}>
                <h1 className="heading-1 text-dark" style={{"textAlign": "right"}}>Love is so much more</h1>
                <p className="text-dark body-text" style={{"textAlign": "right"}}>Love is.... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, porro! Tempora numquam voluptas repellendus sequi architecto! Excepturi nisi commodi aliquam eveniet rem iste molestiae, enim quo repudiandae provident amet deserunt dolorum cupiditate natus omnis error quis eos nam facere quam sequi? Accusamus laudantium autem facilis nihil at ullam, aliquid fugiat soluta rem voluptate quam cupiditate numquam ipsum fuga expedita. Itaque a quisquam voluptatem repudiandae laborum veniam, ea maiores eius velit natus rem, animi vero enim dolores! Fugit culpa labore aut suscipit mollitia ipsum reprehenderit, sit quisquam est nihil sequi nulla dicta eveniet a, autem nam rem. Accusamus sint molestiae minus explicabo alias nobis expedita numquam. Nihil quasi asperiores facilis molestiae, excepturi temporibus accusantium beatae aspernatur, alias doloremque quaerat praesentium quo.</p>
            </div>
            <div className="container flex">
                <img src="https://media.istockphoto.com/photos/bouquet-at-the-beach-picture-id929904308?b=1&k=20&m=929904308&s=170667a&w=0&h=sX5cW02BnPPnzMdFCxLy5mH7eASJUxMw_79WxzZMbfo=" alt="A married couple holding hands at the beach" />
            </div>
        </div>

        <div className="container" style={{"borderBottom": "2px solid gray", "marginTop": "6rem"}}></div>

        <div className="full-container grid">
            <div className="container flex">
                <img src="https://www.thebayhotel.net/images/weddings/wedding-couple-900x500.jpg" alt="A married couple holding hands at the beach" />
            </div>
            <div className="container flex" style={{"justifyContent": "center", "flexDirection": "column"}}>
                <h1 className="heading-1 text-dark">Unforgetable Experience</h1>
                <p className="text-dark body-text">Make your wedding last a life time.... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, porro! Tempora numquam voluptas repellendus sequi architecto! Excepturi nisi commodi aliquam eveniet rem iste molestiae, enim quo repudiandae provident amet deserunt dolorum cupiditate natus omnis error quis eos nam facere quam sequi? Accusamus laudantium autem facilis nihil at ullam, aliquid fugiat soluta rem voluptate quam cupiditate numquam ipsum fuga expedita. Itaque a quisquam voluptatem repudiandae laborum veniam, ea maiores eius velit natus rem, animi vero enim dolores! Fugit culpa labore aut suscipit mollitia ipsum reprehenderit, sit quisquam est nihil sequi nulla dicta eveniet a, autem nam rem. Accusamus sint molestiae minus explicabo alias nobis expedita numquam. Nihil quasi asperiores facilis molestiae, excepturi temporibus accusantium beatae aspernatur, alias doloremque quaerat praesentium quo.</p>
            </div>
        </div>
        <div className="container" style={{"borderBottom": "2px solid gray", "marginTop": "6rem"}}></div>

        <div className="full-container" style={{"marginTop": "6rem"}}>
            <h1 className="heading-1 text-dark" style={{"textAlign": "center"}}>You might have seen us in...</h1>
            <img style={{"width": "75%", "margin": "auto"}} src="https://bradandjen.s3.us-east-2.amazonaws.com/_main_site/wp-content/uploads/2016/08/28063305/Featured-for-Website-Small-1.jpg" alt="List of different logos such as google and buzzfeed" />
        </div>

        <div className="container" style={{"borderBottom": "2px solid gray", "marginTop": "6rem"}}></div>

        <div className="full-container" style={{"marginTop": "3rem"}}>
            <h1 className="heading-1 text-dark" style={{"textAlign": "center"}}>Hear some of our <b>success</b> stories</h1>
            <div className="container grid" style={{"gridAutoColumns": "auto"}}>
                {storyData.map((story) => {
                    return <Story key={story.id} img={story.img} alt_text={story.alt_text} />
                })}
            </div>
        </div>


        <div className="container" style={{"borderBottom": "2px solid gray", "marginTop": "6rem"}}></div>

        <div className="full-container" style={{"marginTop": "3rem"}}>
            <h1 className='heading-1 text-dark' style={{"textAlign": "center"}}>What are you waiting for? Do it!</h1>
            <div className='container flex' style={{"justifyContent": "center"}}>
                <h2 className='text-dark'  style={{"textAlign": "center", "margin": "5rem 0 7rem 0"}}><span>- </span> <a href="/contact" id="contact-me-text">Contact Me!</a> <span> -</span></h2>
            </div>
        </div>
    </div>
  )
}

export default Home