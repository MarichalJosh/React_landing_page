import React from "react";

export const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand col-md-9" href="#">
					Start Bootstrap{" "}
				</a>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto ">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
