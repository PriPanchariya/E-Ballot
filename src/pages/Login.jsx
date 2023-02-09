import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blockchain from "../asstes/images/blockchain.jpg";
import axios from "axios";
import { useNavigate } from "react-router";



// import './LoginPage.css';

const LoginPage = () => {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const [error, setError] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
		setError({
			...error,
			[e.target.name]: ""
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!user.username) {
			setError({
				...error,
				username: "Username is required",
			});
		} else if (!user.password) {
			setError({
				...error,
				password: "Password is required",
			});
		} else {
			console.log("Data submitted successfully");
		}
		console.log(user);
		try {
			const response = await axios.post("http://localhost:3001/api/auth/login", {
				email: user.username,
				password: user.password
			});
			if (user.email==='admin@gmail.com' || user.password==='admin123'){
				navigate("/addcandidate");
			}

			else  {
				navigate("/dashboard");
			}
		} catch (error) {
			console.error("Error logging user.");
			console.error(error.response.data);
		}
	};

	return (
		<>
			<div
				className="LoginPage"
				style={{
					backgroundImage: `url(${Blockchain})`,

				}}
			>
				{/* <div class="ball" style={{ left: "8.5%", bottom: "15%",background:'radial-gradient( circle at 75% 30%, white 5px, aqua 8%, darkblue 60%, aqua 100%)',boxShadow:'inset 0 0 20px #fff, inset 10px 0 46px #eaf5fc, inset 88px 0px 60px #c2d8fe, inset -20px -60px 100px #fde9ea, inset 0 50px 140px #fde9ea, 0 0 90px #fff' }}></div>

      <div class="shadow" style={{ left: "12%", top: "85%" }}></div> */}
				<h1 style={{ color: 'white' }}>Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							name="username"
							value={user.username}
							onChange={handleChange}
							className="form-control"
						/>
						{error.username && <p className="form-error">{error.username}</p>}
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							value={user.password}
							onChange={handleChange}
							className="form-control"
						/>
						{error.password && <p className="form-error">{error.password}</p>}
					</div>
					<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
						Login
					</button>
					<hr />
					<p>
						Don't have an account?{" "}
						<Link to="/signup">
							{" "}
							<u>Signup</u>
						</Link>{" "}
					</p>
				</form>
				{/* <div class="ball" style={{ right: "8.5%", bottom: "55%", background:'radial-gradient( circle at 75% 30%, white 5px, aqua 8%, darkblue 60%, aqua 100%)',boxShadow:'inset 0 0 20px rgb(244, 227, 227), inset 10px 0 46px ##c4e6fb, inset 88px 0px 60px ##7aa4ed, inset -20px -60px 100px ##f0c7c9, inset 0 50px 140px ##fbc2c5, 0 0 90px rgb(214, 216, 250)' }}></div>

      <div class="shadow" style={{ right: "12%", top: "45%" }}></div> */}
			</div>
		</>
	);
};

export default LoginPage;



