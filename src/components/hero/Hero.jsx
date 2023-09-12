import React from "react";
import "./hero.css";
import profile from "../../assets/profile.jpg";
import polygon from "../../assets/polygon-scatter.svg";
import logo_linkedin from "../../assets/linkedin.png";
import logo_twitter from "../../assets/twitter.png";
import logo_github from "../../assets/github.png";
// import Faizan_Hamid_Resume from "../../assets/Resume/Faizan_Hamid_Resume.pdf"


const Hero = () => {
	return (
		<div className="hero" id="home">
			<div className="content">
				<div className="content-div">
					<h2 className="salutation"> H E L L O ! _I'm</h2>
					<h1 className="iam" >Faizan Hamid</h1>
					<p className="description" >Full Stack Web Developer</p>
					<p className="homes" >
					I am dedicated to continually improving my skills and knowledge as a developer.
					 I thrive on challenging myself to learn and grow, always seeking opportunities
					  to expand my skill set and stay current with emerging trends and technologies
					</p>
					<div className="socials">
						<a
							href="https://twitter.com/FaizanH68410332"
							target="_blank"
							className="social"
						>
							<img src={logo_twitter} alt="Twitter" />
						</a>
						<a
							href="https://www.linkedin.com/in/faizan-hamid29/"
							target="_blank"
							className="social"
						>
							<img src={logo_linkedin} alt="Linkedin" />
						</a>
						<a
							href="https://github.com/faizanhamid0717"
							target="_blank"
							className="social"
						>
							<img src={logo_github} alt="Github" />
						</a>
						<button id="resume-button-2" 
						
						  onClick={()=>{window.open(`https://drive.google.com/file/d/1tp29qG9cjSmziNOIh7yHaTW5BC2GDs5S/view?usp=sharing`)}}
						>
						<a
							href="https://drive.google.com/uc?export=download&id=1tp29qG9cjSmziNOIh7yHaTW5BC2GDs5S"
							target="_blank"
							className="social"
							id="resume-link-2"
							download="Faizan__Hamid__Resume.pdf"
							
						>
							Download Resume
						</a> 
						</button>
	
					</div>
				</div>
			</div>
			<div className="image">
				<div className="profile-img-div">
					<div className="lines"></div>
					<img src={profile} alt="profile"  className="home-img"/>
				</div>
				<div className="polygons">
					<img src={polygon} />
				</div>
			</div>
		</div>
	);
};
export default Hero;
