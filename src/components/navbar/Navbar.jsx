


import React from "react";
import "./navbar.css";
import Logo from "../../assets/Logo.svg";
import Faizan from "../../assets/Faizan.png"
import { FiAlignRight } from "react-icons/fi";
const Links = () => {
	
	
	return (
		<div>
			<a href="#home" id="link" className="nav-link home">
				Home
			</a>
			
			
			<a href="#about" id="link" className="nav-link about">
				About me
			</a>
			
			{/*  */}
			<a href="#skills"   id="link"  
			//className="nav-link skills" 
			
			 >Skills</a>
			
			
			
			<a   href="#projects" id="link" className="nav-link projects">
				Projects
			</a>
			<a href="#contact" id="link" className="nav-link contact">
				Contact
			</a>
			
		<button id="resume-button-1" 
		onClick={()=>{window.open(`https://drive.google.com/file/d/1tp29qG9cjSmziNOIh7yHaTW5BC2GDs5S/view?usp=sharing`)}}>
			<a 
			href="https://drive.google.com/uc?export=download&id=1tp29qG9cjSmziNOIh7yHaTW5BC2GDs5S"
			target="_blank" 
			 download="Faizan__Hamid__Resume.pdf"
			
			 id="resume-link-1"
			  className="nav-link resume">
  Resume
</a>
			</button>
		</div>
	);
};
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
	return (
		<div  id="nav-menu" className="navbar">
			<div className="title">
				<img src={Faizan} alt="logo" />
				<p className="nav__header">Faizan</p>
			</div>
			<div id="links">
				<Links />
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
export default Navbar;

