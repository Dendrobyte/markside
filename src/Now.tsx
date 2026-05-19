
function Now() {
    return (
        <>  
            <div className='middle-column container-body-width'>
                <div className='blue-bubble who-am-i'>
                    <h1 className='blue-league-title'>May 19, '26</h1>
                    <p className='gray-league-paragraph-large'>
                        I've just finished <i>Anything You Want</i> by <a className='league-p-clickable' href="https://sive.rs/a">Derek Sivers</a> and was encouraged to: <br></br>
                        <ul>
                            <li>- Resume mockups for Project Harbinger </li>
                            <li>- File for an LLC (feels real)</li>
                            <li>- Create this /now page</li>
                        </ul><br></br>

                        My work at Sleeper has been good, and since leaving Apple my burnout recovery feels like it's around 80% now. I'm doing what I call "Itch Piloting"; working on being more present and whenever the Itch strikes for something like a game or Harbinger, I embrace it. The only discipline is fighting distraction and what I don't really want to spend my time on.<br></br><br></br>

                        My current game prototype that I'm spending 1 hour on every morning is Teas of the Kingdom, which I post updates to daily on <a className='league-p-clickable' href="https://bsky.app/profile/dendrobyte.bsky.social">BlueSky</a>. This morning practice has been incredibly helpful for getting away from the weight that is an obsession with "Result".<br></br><br></br>

                        This is a static page right now and easy enough to update since I set up the auto deploy via FTPxGitHub Actions when I did this a while ago. Hopefully my friends don't find it insensitive when I hit them with markobacon.com/now when they ask what I've been up to.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Now;