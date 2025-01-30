import React from "react";

const Navbar = () => {
	const links = [
		{ title: "Home", url: "/" },
		{ title: "Services", url: "/services" },
		{ title: "About Us", url: "/about" },
		{ title: "Contact", url: "/contact" },
	];
	return (
		<nav className="border border-white rounded-lg w-[90%] mx-auto mt-5 text-white py-3">
			<div className="flex justify-center items-center gap-6">
				{links.map(({ title, url }) => (
					<button className="hover:underline underline-offset-8  px-3 py-3 rounded cursor-pointer">
						{title}
					</button>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
