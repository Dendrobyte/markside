import { useState } from "react";
import { ALL_PROJECT_ITEMS } from "./ProjectItem";

const validTabs: string[] = ["Active Projects", "Inactive Projects"];

// TODO: useEffect to re-render when active tab changes...? i.e. dependency array of [activeTab] I think?

function Projects() {
    // Parent projects component, handles clicking etc.
    // TODO: Better way than just relying on the string name?
    const [activeTab, setActiveTab] = useState("Active Projects")

    // First we render all the possible tabs, making the active one have the 'active-tab-title' class
    // Then, given that information, we render all the projects who have the same tab name
    return (
        <div className='projects-container'>
            <div className='project-tabs'>
                {
                    // Sort out the tab titles
                    validTabs.map(el => {
                        const activeClass = el === activeTab ? 'active-tab-title' : 'inactive-tab-title'
                        return <div className={`project-tab-title ${activeClass}`} onClick={() => setActiveTab(el)}>{el}</div>
                    })
                }
            </div>
            <div className='project-list'>
                {ALL_PROJECT_ITEMS.get(activeTab)}
                <hr></hr>
                <p className='project-subtext'>Project titles are clickable! Most go to GitHub repositories.</p>
            </div>
        </div>
    )
}

export default Projects;