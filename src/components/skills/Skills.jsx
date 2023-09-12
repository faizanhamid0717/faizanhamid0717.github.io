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
import git_logo from '../../assets/github.png'
import postman_logo from '../../assets/postman.png'
import typescript_logo from '../../assets/typescript.png'
import Express_logo from  '../../assets/Express.png'
import reduxjs_logo from  '../../assets/reduxjs.png'
import vscode_logo from '../../assets/vscode.jpg'
import nodejs_logo from '../../assets/nodejs.png'
import mongodb_logo from '../../assets/mongodb.png'


const Skills = () => {

	return (
	<div >
		<div class="skills" id="skills" className="nav-link skills" >
			<h1>Skills</h1>
			<div className="container" >
				
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
							<img src={reduxjs_logo} alt="react" className="skills-card-img"/>
							<h2 className="skills-card-name">Redux</h2>
						</div>
						
					</div>
				</div>

				<div className="skills-card">
					<div className="card">
						<div className="image-div">
							<img src={Express_logo} alt="react" className="skills-card-img"/>
							<h2 className="skills-card-name">Express</h2>
						</div>
						
					</div>
				</div>

				<div className="skills-card">
					<div className="card">
						<div className="image-div">
							<img src={typescript_logo} alt="react" className="skills-card-img"/>
							<h2 className="skills-card-name">TypeScript</h2>
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

				<div className="skills-card">
					<div className="card">
						<div className="image-div">
							<img src={nodejs_logo} alt="react" className="skills-card-img"/>
							<h2 className="skills-card-name">Node.js</h2>
						</div>
						
					</div>
				</div>

             
				<div className="skills-card">
					<div className="card">
						<div className="image-div">
							<img src={mongodb_logo} alt="react" className="skills-card-img"/>
							<h2 className="skills-card-name">mongoDB</h2>
						</div>
						
					</div>
				</div>
				

				
				{/* 8888888888 */}
				
				
				<div className="more_skills"> 
				<h1>Tools</h1> 
					<div className="more_skill">
						<img src={postman_logo} alt="c_logo" />
					</div>

					<div className="more_skill">
						<img src={vscode_logo} alt="cpp_logo" />
					</div>

					<div className="more_skill">
						<img src={git_logo} alt="git_logo" />
					</div>
					
					<div className="more_skill">
						<img src={netlify_logo} alt="netlify_logo" />
					</div>

					<div className="more_skill">
						<img src={npm_logo} alt="npm_logo" />
					</div>

					
					
					 
				</div> 
				

			</div>

		</div>

		</div>
	);
};
export default Skills;
