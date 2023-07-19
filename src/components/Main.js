import Projects from "./Projects";

// the component function
function Main (props) {

	//The Components Returned JSX
	return (
		<div className='Main'>
			
			<Projects name="Hyrule Compendium Searcher" github="https://github.com/Dvec319/Project-1" deployed="https://hyrule-compendium-searcher.onrender.com" image="https://i.imgur.com/aOK1QVb.png"/>

			<Projects name="My Video Game List" github="https://github.com/Dvec319/project-2" deployed="https://videogame-app.onrender.com" image="https://i.imgur.com/cdpaPxH.png"/>
			
		</div>
	)
};

// export the component
export default Main;
