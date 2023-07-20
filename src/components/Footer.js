// the component function
function Footer  (props) {

	//The Components Returned JSX
	return (
		<div className='Footer'>
			<nav className='navbar'>
				<h1 className='nav-link'>
					<a className='nav-link' href='https://github.com/Dvec319'>
						My Github!
					</a>
				</h1>
				<h1 className='nav-link'>
					<a
						className='nav-link'
						href='https://www.linkedin.com/in/michaelcdelvecchio/'>
						My Linkedin!
					</a>
				</h1>
			</nav>
		</div>
	);
};

// export the component
export default Footer;
