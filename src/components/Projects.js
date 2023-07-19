// the component function
function Projects (props) {

	//The Components Returned JSX
	return (
        <div className="Projects">
            <div className="card">
                <img className="project-image" src={props.image}/>
                <h2 className="project-name">{props.name}</h2>
                <a className="project-link" href={props.github}>Github</a>
                <a className="project-link" href={props.deployed}>Deployed Site</a>
            </div>
        </div>
    )
};

// export the component
export default Projects;
