import React from "react";

export const RegisterPage = () => {
	return (
		<div>
			<h1>Register Page</h1>
			<form action="">
				<input 
					type="text" 
					placeholder="Name" />
				<input 
					type="email" 
					placeholder="Email" />
				<input 
					type="password" 
					placeholder="Password" />
				<input 
					type="password" 
					placeholder="Repeat Password" />
				<button type="submit" >registrar</button>
			</form>
		</div>
	);
};
