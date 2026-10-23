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
                        By day, I am a <span className='league-p-bold'>backend <a className='league-p-clickable' href="http://www.linkedin.com/in/markbacon78">Software Engineer</a></span> based in Seattle/ Check out my <a className='league-p-clickable' href="https://www.markobacon.com/now">/now</a> page to see what I'm working on currently
                        <br></br>
                        <br></br>
                        I focus on <span className='league-p-bold'>building human-centric things</span> grounded in meticulous design and technical challenge. Through games and apps I <span className='league-p-bold'>connect users and work on thoughtful functionality</span>. I enjoy working on <span className='league-p-bold'>designing and implementing systems that make users' lives easier</span> and more manageable without getting caught up in the details. In games and through gamification, I seek to leverage multiplayer accountability and fun to bring people back into a world lacking connection- and often humanity.
                        <br></br>
                        <br></br>
                        I compete in Brazilian Jiu Jitsu (blue belt), work on a variety of game development prototypes, keep up to date with linguistic research and philosophy papers, trail run, practice MMA, meditate, and continue the lifelong pursuit of art. Check out my <a className='league-p-clickable' href="#Projects">Projects</a> section for more holistic descriptions of what I'm producing.
                        <br></br>
                        <br></br>
                        Check out some of my longer thoughts on my <a className='league-p-clickable' href="https://markbacon78.wordpress.com/">WordPress Blog</a> has insights and thoughts about what I'm working on. And sometimes just the world, or reality itself. You can also find me on <a className='league-p-clickable' href="https://bsky.app/profile/dendrobyte.bsky.social">BlueSky (@dendrobyte.bsky.social)</a> sharing my thoughts with the void as well as development updates on my latest game prototype.</p>
                        <br></br>
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
                    <div className='blue-bubble'>
                        <h1 className='blue-league-title'>In summary, I am</h1>
                        <p className='gray-league-paragraph'>
                            A storyteller,
                            a backend software engineer,
                            working on games,
                            working on Harbinger,
                            competing in BJJ,
                            making YouTube videos,
                            pursuing art.
                            I have one virtue, eight values, and eight entities I surrender to (the 16 Hues).
                            </p>
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
                            <li className='misc-links-list-item'>- <a href="/https://dendrobyte.itch.io/" className='misc-links-title'>My itch.io page</a>, in case the Games tab is not totally up to date</li>
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