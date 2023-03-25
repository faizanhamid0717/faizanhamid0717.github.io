import React from "react";
import "./skills.css";
import html_logo from "../../assets/html.png";
import css_logo from "../../assets/css.png";
import javascript_logo from "../../assets/javascript.png";
import react_logo from "../../assets/react.png";
import netlify_logo from '../../assets/netlify.png'
import vercel_logo from '../../assets/vercel.jpg'
import npm_logo from '../../assets/npm.png'
import chakra_logo from '../../assets/chakra.png'
import python_logo from '../../assets/python.png'
// import npm_logo from '../../assets/npm.png'
import canva_logo from '../../assets/canva.png'
import figma_logo from '../../assets/figma.png'
import affinity_designer_logo from '../../assets/affinity-designer.png'
const Skills = () => {

	return (
		<div className="skills" id="skills" >
			<h1>Skills</h1>

			<div className="container">

				<div className="skills-card" >
					<div className="card">
						<div className="image-div">
							<img src={html_logo} alt="html" className="skills-card-img" />
							<h2 className="skills-card-name">HTML</h2>
						</div>
						
					</div>
				</div>

				<div className="skills-card">
					<div className="card">
						<div className="image-div" >
							<img src={css_logo} alt="css" className="skills-card-img"/>
							<h2 className="skills-card-name">CSS</h2>
						</div>
						
					</div>
				</div>

				<div className="skills-card">
					<div className="card">
						<div className="image-div">
							<img src={javascript_logo} alt="javascript" className="skills-card-img" />
							<h2 className="skills-card-name">JavaScript</h2>
						</div>
						
					</div>
				</div>

				<div className="skills-card">
					<div className="card">
						<div className="image-div">
							<img src={react_logo} alt="react" className="skills-card-img"/>
							<h2 className="skills-card-name">React</h2>
						</div>
						
					</div>
				</div>

				<div className="skills-card">
					<div className="card">
						<div className="image-div">
							<img src={chakra_logo} alt="react" className="skills-card-img"/>
							<h2 className="skills-card-name">Chakra-Ui</h2>
						</div>
						
					</div>
				</div>

				<div className="skills-card">
					<div className="card">
						<div className="image-div">
							<img src={npm_logo} alt="react" className="skills-card-img"/>
							<h2 className="skills-card-name">Npm</h2>
						</div>
						
					</div>
				</div>

				<div className="skills-card">
					<div className="card">
						<div className="image-div">
							<img src={vercel_logo} alt="react" className="skills-card-img"/>
							<h2 className="skills-card-name">Vercel</h2>
						</div>
						
					</div>
				</div>

				<div className="skills-card" >
					<div className="card">
						<div className="image-div">
							<img src={netlify_logo} alt="react" className="skills-card-img" />
							<h2 className="skills-card-name">Netlify</h2>
						</div>
						
					</div>
				</div>

				
				{/* 8888888888 */}
				

				{/* <div className="more_skills">
					<div className="more_skill">
						<img src={c_logo} alt="c_logo" />
					</div>
					<div className="more_skill">
						<img src={cpp_logo} alt="cpp_logo" />
					</div>
					<div className="more_skill">
						<img src={python_logo} alt="python_logo" />
					</div>
					<div className="more_skill">
						<img src={git_logo} alt="git_logo" />
					</div>
					<div className="more_skill">
						<img src={github_logo} alt="github_logo" />
					</div>
					{/* <div className="more_skill">
						<img src={npm_logo} alt="npm_logo" />
					</div> */}
					{/* <div className="more_skill">
						<img src={affinity_designer_logo} alt="affinity_designer_logo" />
					</div>
					<div className="more_skill">
						<img src={canva_logo} alt="canva_logo" />
					</div>
					{/* <div className="more_skill">
						<img src={figma_logo} alt="figma_logo" />
					</div> */}
				{/* </div>  */}
				

			</div>
		</div>
	);
};
export default Skills;
