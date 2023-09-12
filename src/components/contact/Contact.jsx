import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	
	const [email, setEmail] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [submitStatus, setSubmitStatus] = React.useState(false);
	console.log(form.current);
	
	const sendEmail = (e) => {
		setSubmitStatus(true)
		e.preventDefault();
		emailjs
			.sendForm(
				"service_h0fxv5y",
				"template_q4o3rsc",
				form.current,
				"ph565lG33yXZKRkUT"
			)
			.then(
				(res) => {
					console.log(res.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		
		setEmail("");
		setPhone("");
		setMessage("")
		setTimeout(() => {setSubmitStatus(false)}, 3000);
	};
	return (
		<div className="nav-link contact">
		<div className="contact" id="contact"  >
			<h2>Contact me </h2>
			<form ref={form} onSubmit={sendEmail}>
				
				<input
					type="email"
					className="email"
					placeholder="Email"
					// id="contact-emai"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
				<input
					cols="10"
					rows=""
					className="message"
					placeholder="Phone No"
					// id="contact-phone"
					name="phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					required
				></input>
              
			  <textarea
					cols="30"
					rows="10"
					className="message"
					placeholder="Message"
					name="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				></textarea>

				{submitStatus ? (
					<div className="status">You message was sent successfully</div>
				) : (
					<></>
				)}

				<button className="send" type="submit">
					Send Message
				</button>
			</form>
		</div>
	</div>
	);
};
export default Contact;
