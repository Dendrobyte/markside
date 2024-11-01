interface ProjectItemProps {
    title: string
    description: string[]
    subtext: string | undefined
    link: string
}

function ProjectItem(props: ProjectItemProps): JSX.Element {
    // Defines a project component.
    // Takes in a title and an array for the description.
    // Every other element in the array will be bolded.
    const descriptionParts: JSX.Element[] = []

    // We act on assumption that odd elements are bolded.
    // And for the spaces, that the last element is not bolded.
    props.description.forEach((el, i) => {
        if (i % 2 !== 0) {
            descriptionParts.push(<span key={i} className='league-p-bold'> {el} </span>)
        } else {
            descriptionParts.push(<span key={i}>{el}</span>)
        }
    });

    return (
        <div className='project-section'>
            <div className='project-title'><a className='project-title-link' href={props.link}>{props.title}</a></div>
            <div className='project-desc'>{descriptionParts}</div>
            {props.subtext !== undefined ? <div className='project-subtext'>{props.subtext}</div> : null}
            <hr className='project-divide'></hr>
        </div>
        
    )
}

export default ProjectItem;

// I'm not pulling information from a backend so... it's just all here.
// I do have a backend, so I could toss this all there just as easily, but for now I'll keep the data chilling on the frontend
// since it's all static information anyway.
// Keys are the tab title (Enum type would be useful here) for retrieval in Projects tab.
export const ALL_PROJECT_ITEMS: Map<string, JSX.Element[]> = new Map<string, JSX.Element[]>([
    ["Current", [
        <ProjectItem
            title="Infinite Game (Rename TBD)"
            description={["A", "full stack web application", "built to empower people to be players in their own lives,", "creating rules and systems around their ultimate achievements", "in a world full of distractions"]}
            subtext="The Finite Vault feature was rolled out and the full site is being developed (repo temporarily private). MVP will have three additional features."
            link="https://infinitegame.markobacon.com/"
        />,
        <ProjectItem
        title="Oink in the Chamber ('24-...)"
        description={["A", "multiplayer game", "built in", "Godot", "with a server built using", "Go", "from the ground up. Focuses on simple gameplay for friends to easily get together and have fun in a slightly competitive environment."]}
        subtext="Sort of on pause while prototyping, but a capstone multiplayer game to revisit. And the server needs some more work."
        link="https://github.com/Dendrobyte/OinkITC"
        />
    ]],
    ["General/Web Dev",[
        <ProjectItem
            title="Oink 2.0"
            description={["A Minecraft server", "focused on giving people an environment to relax and hang out", "in a game of infinite possibilities."]}
            subtext="This is a continuation of a Minecraft server I began in 2015, which is also the catalyst for teaching myself to code! I set up a home server for this and every blue moon will do some plugin development."
            link="http://www.redstoneoinkcraft.com/"
        />,
        <ProjectItem
            title="TwitLess ('22)"
            description={["A", "minimalist Twitter app", "that was being built in", "Angular JS", "with an indeterminate back-end."]}
            subtext="Project unpublished. I dropped this project when Twitter became X, and I decided that Angular wasn't quite for me."
            link="https://github.com/Dendrobyte/TwitLess"
        />,
        <ProjectItem
            title="RecipeBox ('21)"
            description={["A", "full stack web application", "built with a React front-end and generic Node backend", "alongside with 4 others.", "Our intention was to", "make recipe sharing easy and focused for users of all demographics,", "without getting bogged down by a 10 minute read before you access the recipe itself."]}
            subtext={undefined}
            link="https://github.com/amn493/RecipeBox"
        />,
        <ProjectItem
        title="CauldronWars ('16 - '17)"
        description={["Without this Minecraft minigame, I would not be the software engineer I am today. This was", " a game built around small online player sizes and designing a custom game mode,", "where", "tens of players would play on Oinkcraft every day", "and I got to discover the joy of play testing."]}
        subtext={undefined}
        link="https://github.com/Dendrobyte/CauldronWars"
        />
    ]],
    ["Games", [
        <ProjectItem
            title="Death's Ballad (Oct '24)"
            description={["A game", "prototype / proof of concept", "about taking over Death's responsibilities. A", "narrative-based point-and click written in Unity,", "Death's Ballad is one of four games being prototyped for a game I'm working on with a friend."]}
            subtext="The repo is public on my GitHub, and you can download the game below via itch.io for Mac and Windows if you want to check it out! A quick 20 second demo playthrough."
            link="https://dendrobyte.itch.io/deaths-ballad"
        />,
        <ProjectItem
        title="Tetris Clone (Dec '23 - Jan '24)"
        description={["A 3 week project to give myself", "an introduction to the Godot game engine", "by re-developing a game I am very familiar with (I… love Tetris)."]}
        subtext={undefined}
        link="https://github.com/Dendrobyte/TetrisClone"
        />,
        <ProjectItem
            title="Wallglider"
            description={["In progress!", "Upload TBD."]}
            subtext="Point scoring and general procedural gen like alto and superflight, with a chill vibe. Movement like lucio wallriding and a freeroam vibe like spiderman swinging... Not for the prototype at least but for the game at the end of the day."
            link=""
        />,
        <ProjectItem
            title="TypeSledder"
            description={["A 2D typing game", "written in Lua using the Love2D engine.", "Still in pre-development, so no final version uploaded yet. Uses Kenney's asset pack(s)."]}
            subtext="I started it a while ago, but it's on pause while I get my feet a little wetter with Unity by working on Wallglider."
            link=""
        />,
        <ProjectItem
            title="Co-Obstacle Course"
            description={["Prototype for after Wallglider", "up next!", "Big focus on networking in games,", "since I'm writing the server from scratch in Golang,", "like OinkITC."]}
            subtext="--"
            link=""
        />,
        <ProjectItem
        title="OinkTowny ('18 - '19)"
        description={["A Minecraft plugin", "written in Java", "that focused on", "building a creative, non-combative survival world", "for players to connect with and collaborate in."]}
        subtext={undefined}
        link="https://github.com/Dendrobyte/OinkTowny"
        />
    ]]
]);

