import './Home.css';
import metaphorical_self_img from './img/metaphorical_self.jpg';
import real_self_img from './img/real_self.jpg';
import Projects from './markside_components/Projects';
import YTEmbed from './markside_components/YTEmbed';

function Home() {
    return (
        <>  
            <div className='middle-column container-body-width'>
                <div className='middle-flex-row'>
                    <div className='blue-bubble who-am-i'>
                        <h1 className='blue-league-title'>Who am I?</h1>
                        <p className='gray-league-paragraph'>
                        It's a fair question and I'm not so certain as to the answer quite yet, but what I <span className='league-p-bold'>can</span> tell you about myself is that I am <span className='league-p-bold'>[fullstack, backend] <a className='league-p-clickable' href="http://www.linkedin.com/in/markbacon78">Software Engineer</a></span> by day who focuses on <span className='league-p-bold'>seamless user experiences</span> through meticulous design and implementation to <span className='league-p-bold'>connect users with intuitive interfaces and thoughtful functionality</span>. I work on <span className='league-p-bold'>designing and implementing systems that make users' lives easier</span> and more manageable <span className='league-p-bold'>so that they can focus on their main goals</span> without getting caught up in the details.
                        <br></br><br></br>
                        Outside of my day job, I'm an <span className='league-p-bold'>[indie game, web] developer</span>, with focuses on <span className='league-p-bold'>meaningful decisions through player agency</span> and <span className='league-p-bold'>bringing elements of gamification into the world of full stack applications</span> to empower people to focus on what they really want to do. Check out my <a className='league-p-clickable' href="#Projects">Projects</a> section for how I'm bringing these ideas to life.
                        <br></br><br></br>
                        I'm also self studying Japanese, a martial artist, sketching when I can, modeling and animating in Blender, meditating, gaming, creating videos, and of course a big fan of the Oxford comma. And <a className='league-p-clickable' href="https://markbacon78.wordpress.com/">my WordPress Blog</a> has insights and thoughts about what I'm working on. And sometimes just the world, or reality itself.</p>

                        <br></br><br></br>
                    </div>
                    <div className='blue-bubble self-pictures'>
                        <div className='self-picture-item'>
                            <img src={real_self_img} alt='The Real Me'></img>
                            <p className='picture-subtitle'>The Real Me</p>
                        </div>
                        
                        <br></br>
                        
                        <div className='self-picture-item'>
                            <img src={metaphorical_self_img} alt='Metaphorical Self'></img>
                            <p className='picture-subtitle'>Metaphorical Self</p>
                        </div>
                        
                    </div>
                </div>
                <div className ='middle-bottom'>
                    <div className='blue-bubble'>
                        <Projects />
                    </div>
                </div>
                <div className='middle-flex-row'>
                    <div className='blue-bubble half-container'>
                        <h1 className='blue-league-title'>Misc Links</h1>
                        <ul> { /* TODO: I could make this iterative? */ }
                            <li className='misc-links-list-item'>- <a href="/not_available" className='misc-links-title'>Emergenshibe</a>, for when you need shibe support</li>
                            <hr></hr>
                            <li className='misc-links-list-item'>- <a href="http://markbacon78.wordpress.com/" className='misc-links-title'>My blog, Markside</a>, which for now is hosted on WordPress</li>
                            <li className='misc-links-list-item'>- <a href="http://www.github.com/dendrobyte" className='misc-links-title'>GitHub</a> has effectively all the code for my projects, including this website!</li>
                            <li className='misc-links-list-item'>- <a href="http://www.instagram.com/markbacon78" className='misc-links-title'>My Instagram</a>, though admittedly I'm not all that active aside from 5:30am wakeup stories</li>
                        </ul>
                    </div>
                    <div className='blue-bubble yt-container'>
                        <YTEmbed />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;