import './Home.css';
import metaphorical_self_img from './img/metaphorical_self.jpg';
import real_self_img from './img/real_self.jpg';

function Home() {
    return (
        <>  
            <header>
                <div className='primary-header '>
                    <div className='header-gray-bg'>
                        <h1 className='dovetail-title header-text'>Markside</h1>
                    </div>
                </div>
                
            </header>

            { /* TODO: Yeet this */ }
            <h1 className='league-spartan-regular body-temp'>This website is under construction, check back on Monday!<br></br>You can find the old version <a href="https://www.markobacon.com/old">here</a>, but keep in mind it was made what feels like an eternity ago!</h1>
        
            <div className='middle-column'>
                <div className='middle-top'>
                    <div className='blue-bubble self-pictures'>
                        <img src={real_self_img} alt='The Real Me'></img>
                        <p className='picture-subtitle'>The Real Me</p>
                        <br></br>{ /* <hr></hr> TODO: See if I can get the original mockup text and image? */ }
                        <img src={metaphorical_self_img} alt='Metaphorical Self'></img>
                        <p className='picture-subtitle'>Metaphorical Self</p>
                    </div>
                    <div className='blue-bubble who-am-i'>
                        <h1 className='blue-league-title'>Who am I?</h1>
                        <p className='gray-league-paragraph'>
                        It's a fair question and I'm not so certain as to the answer quite yet, but what I <span className='league-p-bold'>can</span> tell you about myself is that I am <span className='league-p-bold'>[fullstack, backend] <a className='league-p-clickable' href="http://www.linkedin.com/in/markbacon78">Software Engineer</a></span> by day who focuses on <span className='league-p-bold'>seamless user experiences</span> through meticulous design and implementation to <span className='league-p-bold'>connect users with intuitive interfaces and thoughtful functionality</span>. I work on <span className='league-p-bold'>designing and implementing systems that make users lives easier</span> and more manageable <span className='league-p-bold'>so that they can focus on their main goals</span> are without getting caught up in the details.
                        <br></br><br></br>
                        Outside of my day job, I'm an <span className='league-p-bold'>[indie game, web] developer</span> by night, with focuses on <span className='league-p-bold'>meaningful decisions through player agency</span> and <span className='league-p-bold'>bringing elements of gamification into the world of full stack applications</span> to empower people to focus on what they really want to do. Check out my <a className='league-p-clickable' href="#Projects">Projects</a> section for how I'm bringing these ideas to life.
                        <br></br><br></br>
                        I'm also self studying Japanese, a martial artist, sketching when I can, modeling and animating in Blender, meditating, gaming, creating videos, and a fan of the Oxford comma. And <a className='league-p-clickable' href="https://markbacon78.wordpress.com/">my WordPress Blog</a> has insights thoughts about what I'm working on. And sometimes just the world, or reality itself.</p>

                    </div>
                </div>
                <div className ='middle-bottom'>
                    {
                        // TODO: This ist he projects tab thing
                    }
                </div>
            </div>
        </>
    )
}

export default Home;