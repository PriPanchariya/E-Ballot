import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blockchain from "../asstes/images/blockchain.jpg";
import axios from "axios";
import { useNavigate } from "react-router";


// import './SignUp.css';

const SignUp = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [error, setError] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
		setError({ ...error, [e.target.name]: "" });
	};

	const validate = () => {
		let nameError = "";
		let emailError = "";
		let passwordError = "";
		let confirmPasswordError = "";

		if (!user.name) {
			nameError = "Name cannot be empty";
		}

		if (!user.email.includes("@")) {
			emailError = "Invalid email";
		}

		if (!user.password) {
			passwordError = "Password cannot be empty";
		} else if (user.password.length < 6) {
			passwordError = "Password must be at least 6 characters long";
		}

		if (user.password !== user.confirmPassword) {
			confirmPasswordError = "Passwords do not match";
		}

		if (nameError || emailError || passwordError || confirmPasswordError) {
			setError({
				name: nameError,
				email: emailError,
				password: passwordError,
				confirmPassword: confirmPasswordError,
			});
			return false;
		}
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const isValid = validate();
		console.log("validation check");
		if (isValid) {
			console.log(user);
			try {
				const response = await axios.post("http://localhost:3001/api/auth/register", {
					name: user.name,
					email: user.email,
					password: user.password
				});

				if (response.status === 200) {
					navigate("/login");

					setUser({
						name: "",
						email: "",
						password: "",
						confirmPassword: "",
					});

				}
			} catch (error) {
				console.error("Error registering user.");
				console.error(error.response.data);
			}

		}
	};

	return (
		<>
			<div className="signup-container" style={{
				backgroundImage: `url(${Blockchain})`,

			}}>
				<h2 style={{ color: 'white' }}>Sign Up</h2>

				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={user.name}
							onChange={handleChange}
						/>
						<div className="error" style={{ color: "red" }}>
							{error.name}
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={user.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="error" style={{ color: "red" }}>
						{error.email}
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={user.password}
							onChange={handleChange}
						/>
						<div className="error" style={{ color: "red" }}>
							{error.password}
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							value={user.confirmPassword}
							onChange={handleChange}
						/>
						<div className="error" style={{ color: "red" }}>
							{error.confirmPassword}
						</div>
					</div>
					<button type="submit" onClick={handleSubmit}>Sign Up</button>
					<hr />
					<p>
						Already a user{" "}
						<Link to="/login">
							{" "}
							<u>Login</u>
						</Link>{" "}
					</p>
				</form>
			</div>
		</>
	);
};

export default SignUp;
