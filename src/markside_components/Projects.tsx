import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ALL_PROJECT_ITEMS } from "./ProjectItem";

const validTabs: string[] = ["Current", "General/Web Dev", "Games"];

// TODO: useEffect to re-render when active tab changes...? i.e. dependency array of [activeTab] I think?

function Projects() {
    // Parent projects component, handles clicking etc.
    // TODO: Better way than just relying on the string name?
    const [activeTab, setActiveTab] = useState("Current")

    let isMobile: boolean = useMediaQuery( {query: "(max-width: 720px)"})

    // First we render all the possible tabs, making the active one have the 'active-tab-title' class
    // Then, given that information, we render all the projects who have the same tab name
    return (
        <div className='projects-container'>
            
                <div className='project-tabs'>
                {!isMobile ?
                    /* Simple text color nav bar for desktop */
                    // Sort out the tab titles
                    validTabs.map(el => {
                        const activeClass: string = el === activeTab ? 'active-tab-title' : 'inactive-tab-title'
                        return <div className={`project-tab-title ${activeClass}`} onClick={() => setActiveTab(el)}>{'↪ ' + el}</div>
                    })
                :
                    /* Background color changing selections for mobile */
                    validTabs.map(el => {
                        const mobileActiveClass: string = el === activeTab ? 'mobile-active-tab-selection' : 'mobile-inactive-tab-selection'
                        return (
                            <div className={`mobile-project-tab-title ${mobileActiveClass}`} onClick={() => setActiveTab(el)}>
                                {el}
                            </div>
                        )
                    })
                }
                </div>
            <div className='project-list'>
                {ALL_PROJECT_ITEMS.get(activeTab)}
                {/* <p className='project-subtext'>Project titles link to active pages (repositories, deployments, downloads).</p> */}
            </div>
        </div>
    )
}

export default Projects;