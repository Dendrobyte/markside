import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import metaphorical_self_img from './img/metaphorical_self.jpg';
import real_self_img from './img/real_self.jpg';
import Projects from './markside_components/Projects';

function Home() {
    let [lifestyleVideoId, setLifestyleVideoId] = useState('');

    useEffect(() => {
        axios.get('https://service.markbacon78.workers.dev/youtube_latest_lifestyle', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
                "Access-Control-Allow-Headers": "*",
            }
        }).then(res => {
            console.log("response: " + res);
            setLifestyleVideoId(res.data);
        })
    }, [lifestyleVideoId]);

    return (
        <>  
            <div className='middle-column'>
                <div className='middle-flex-row'>
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

                        <br></br><br></br>
                        <p className='project-subtext'>This website is currently a work in progress, responsiveness and two more sections inbound. Check back Friday! :D</p>

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
                    <div className='blue-bubble half-container'>
                        <h1 className='blue-league-title'>Latest YouTube Video</h1>
                        <p className='gray-league-paragraph'>I make videos around what I do and what I work on, from updates on my latest development project to my progress in Spartan race training.</p>
                        <iframe width="560" height="315" className='yt-video-embed' src={`https://www.youtube.com/embed/${lifestyleVideoId}?si=IE-zn4rxBTztQGT_`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;