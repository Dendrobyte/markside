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
                        By day, I am a <span className='league-p-bold'>[fullstack, backend] <a className='league-p-clickable' href="http://www.linkedin.com/in/markbacon78">Software Engineer</a></span> based in Seattle, focusing on <span className='league-p-bold'>building human-centric things </span> grounded in meticulous design and technical challenge. Through games and apps I <span className='league-p-bold'>connect users with intuitive interfaces and thoughtful functionality</span>. I enjoy working on <span className='league-p-bold'>designing and implementing systems that make users' lives easier</span> and more manageable without getting caught up in the details. In games and through gamification, I seek to leverage multiplayer accountability and fun to bring people back into a world lacking a bit of connection.
                        <br></br><br></br>
                        By night, I'm a jack of all trades, working on <span className='league-p-bold'>[indie game, web] projects to keep programming fun</span>, with focuses on <span className='league-p-bold'>meaningful decisions through player agency</span> and <span className='league-p-bold'>bringing gamification into people's lives</span>. I'm studying for the JLPT N4, enjoy keeping up to date with linguistics, trail run, practice MMA, meditate, and continue the lifelong pursuit of art. Check out my <a className='league-p-clickable' href="#Projects">Projects</a> section for how I'm bringing these ideas to life!
                        <br></br><br></br>
                        My <a className='league-p-clickable' href="https://markbacon78.wordpress.com/">WordPress Blog</a> has insights and thoughts about what I'm working on. And sometimes just the world, or reality itself. You can also find me on <a className='league-p-clickable' href="https://bsky.app/profile/dendrobyte.bsky.social">BlueSky (@dendrobyte.bsky.social)</a> sharing my thoughts with the void.</p>

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
                            <li className='misc-links-list-item'>- <a href="/emergenshibe" className='misc-links-title'>Emergenshibe</a>, for when you need shibe support</li>
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