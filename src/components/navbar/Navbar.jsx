import React from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import { FiAlignRight } from "react-icons/fi";
import {Link} from 'react-router-dom'

const Links = () => {
	return (
		<div >
			<a href="#home" class='link'className="nav-link home" >
				Home
			</a>
			<a href="#about" class='link'  className="nav-link about">
				About me
			</a>
			<a href="#skills" class='link' className="nav-link skills" >
				Skills
			</a>
			<a href="#projects" class='link' className="nav-link projects" >
				Projects
			</a>
			
			<a href="#contact" class='link' className="nav-link contact" >
				Contact
			</a>
			<a href="https://drive.google.com/file/d/1Kwo7FQJuRqYUc370NUXrS4rlqvoogxaF/view?usp=share_link" class='link' id="resume-link-1" className="nav-link resume">
				Resume
			</a>

            {/* <Link to='/'>Home</Link>
			<Link to='/about'>About Page</Link>
			<Link to='/skills'>Skills</Link>
			<Link to='/projects'>Projects</Link>
			<Link to='/contact'>Contact</Link> */}
		</div>
	);
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
	return (
		<div className="navbar" id="nav-menu">
			<div className="title">
				{/* <img src={Logo} alt="logo" />
				<p className="nav__header">Portfolio</p> */}
				<h1>FAIZAN</h1>
			</div>
			<div className="links">
				
              <Links/>

			</div>
			<div className="toggle-links" onClick={() => {setToggleMenu(prev => !prev)}}>
				<FiAlignRight className="hamburger-icon" />
			</div>
			{toggleMenu 
            ? 
            <div className="toggle-menu">
				<Links />
			</div>
            : 
            <></>}
		</div>
	);
};

// const Navbar=()=>{
// 	return (
// 		<div>
// 			<Link to='/'>Home</Link>
// 			<Link to='/about'>About Page</Link>
// 			<Link to='/skills'>Skills</Link>
// 			<Link to='/projects'>Projects</Link>
// 			<Link to='/contact'>Contact</Link>
// 		</div>
// 	)
// }
export default Navbar;
