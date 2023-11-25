import { Navbar } from "flowbite-react";
import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="menu-area bg-[#001430]">
			<Navbar fluid rounded className="bg-[#001430]">
				<Navbar.Brand href="https://flowbite-react.com">
					<img src={logo} className="w-12" alt="" />
					<span className="self-center whitespace-nowrap text-xl ml-3 font-semibold text-white dark:text-white">
						Atom
					</span>
				</Navbar.Brand>
				<div className="flex md:order-2">
					<Link to='/login'><button className="btn">Login</button></Link>
					<Navbar.Toggle />
				</div>
				<Navbar.Collapse>
					<div className="menu-links flex flex-col gap-4 justify-center items-center md:block">
					<NavLink
						to="/"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/availableCamps"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
					>
						Available Camps
					</NavLink>
					<NavLink
						to="/dashboard"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
					>
						Dashboard
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
					>
						Contact Us
					</NavLink>
					<NavLink
						to="/register"
						className={({ isActive, isPending }) =>
							isPending ? "pending" : isActive ? "active" : ""
						}
					>
						Register
					</NavLink>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
