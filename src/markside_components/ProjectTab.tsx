
interface ProjectTabProps {
    tabName: string
    active: boolean // Whether it is the active tab or not
}

function ProjectTab(props: ProjectTabProps) {
    const activeClass = props.active ? 'active-tab-title' : 'inactive-tab-title'

    return (
        <div>
            
        </div>
    );
}

export default ProjectTab;