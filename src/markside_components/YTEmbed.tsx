import axios from 'axios';
import { useEffect, useState } from 'react';

function YTEmbed() {
    let [lifestyleVideoId, setLifestyleVideoId] = useState('');

    useEffect(() =>{
        axios.get('https://service.markbacon78.workers.dev/youtube_latest_lifestyle', {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
            "Access-Control-Allow-Headers": "*",
        }
        }).then(res => {
            setLifestyleVideoId(res.data);
        })
    }, [])
    
    return (
    <>
        <h1 className='blue-league-title'>Latest YouTube Video</h1>
        <p className='gray-league-paragraph'>I make videos around what I do and what I work on, from updates on my latest development project to my progress in Spartan race training.</p>
        <iframe className='yt-video-embed' src={`https://www.youtube.com/embed/${lifestyleVideoId}?si=IE-zn4rxBTztQGT_`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </>
    )
}

export default YTEmbed