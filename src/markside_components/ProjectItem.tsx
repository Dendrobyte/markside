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
        </div>
    )
}

export default ProjectItem;

// I'm not pulling information from a backend so... it's just all here.
// I do have a backend, so I could toss this all there just as easily, but for now I'll keep the data chilling on the frontend
// since it's all static information anyway.
// Keys are the tab title (Enum type would be useful here) for retrieval in Projects tab.
export const ALL_PROJECT_ITEMS: Map<string, JSX.Element[]> = new Map<string, JSX.Element[]>([
    ["Active Projects", [
        <ProjectItem
        title="Oink in the Chamber"
        description={["A", "multiplayer game", "built in", "Godot", "with a server built using", "Go", "from the ground up. Focuses on simple gameplay for friends to easily get together and have fun in a slightly competitive environment."]}
        subtext={undefined}
        link="https://github.com/Dendrobyte/OinkITC"
        />,
        <ProjectItem
            title="Infinite Game"
            description={["A", "full stack web application", "built to empower people to be players in their own lives,", "creating rules and systems around their ultimate achievements", "in a world full of distractions"]}
            subtext="This project is in a pre-development and conceptual phase (Apr 2024)."
            link="/not_available"
        />,
        <ProjectItem
            title="Oink 2.0"
            description={["A Minecraft server", "focused on giving people an environment to relax and hang out", "in a game of infinite possibilities."]}
            subtext="This is a continuation of a Minecraft server I began in 2015, which is also the catalyst for teaching myself to code! Oink 2.0 started in January 2024 to revive what I let go of when I began university."
            link="http://www.redstoneoinkcraft.com/"
        />
    ]],
    ["Inactive Projects",[
        <ProjectItem
            title="Tetris Clone (Dec '23 - Jan '24)"
            description={["A 3 week project to give myself", "an introduction to the Godot game engine", "by re-developing a game I am very familiar with (I… love Tetris)."]}
            subtext={undefined}
            link="https://github.com/Dendrobyte/TetrisClone"
        />,
        <ProjectItem
            title="TwitLess (2022)"
            description={["A", "minimalist Twitter app", "that was being built in", "Angular JS", "with an indeterminate back-end."]}
            subtext="Project unpublished. I dropped this project when Twitter became X, and I decided that Angular wasn't quite for me."
            link="https://github.com/Dendrobyte/TwitLess"
        />,
        <ProjectItem
            title="RecipeBox (2021)"
            description={["A", "full stack web application", "built with a React front-end and generic Node backend", "built with 4 others.", "Our intention was to", "make recipe sharing easy and focused for users of all demographics,", "without getting bogged down by a 10 minute read before you access the recipe itself."]}
            subtext={undefined}
            link="https://github.com/amn493/RecipeBox"
        />,
        <ProjectItem
            title="OinkTowny (2018-2019)"
            description={["A Minecraft plugin", "written in Java", "that focused on", "building a creative, non-combative survival world", "for players to connect with and collaborate in."]}
            subtext={undefined}
            link="https://github.com/Dendrobyte/OinkTowny"
        />,
        <ProjectItem
            title="CauldronWars (2016-2017)"
            description={["Without this Minecraft minigame, I would not be the software engineer I am today. This was", " a game built around small online player sizes and designing a custom game mode,", "where", "tens of players would play on Oinkcraft every day", "and I got to discover the joy of play testing."]}
            subtext={undefined}
            link="https://github.com/Dendrobyte/CauldronWars"
        />
    ]]
]);

