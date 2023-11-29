import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from "../../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Header = () => {
	const { user, logOut } = useAuth();
	const handleLogOut = () => {
		logOut()
			.then((res) => {
				console.log(res);
				Swal.fire({
					icon: "success",
					title: "Logged Out",
					showConfirmButton: false,
					timer: 1500,
				});
			})
			.then((err) => console.log(err));
	};
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
					{user ? (
						<Dropdown
							arrowIcon={false}
							inline
							label={
								<Avatar
									alt="User settings"
									img={user?.photoURL}
									rounded
								/>
							}
						>
							<Dropdown.Header>
								<span className="block text-sm">
									{user?.displayName}
								</span>
								<span className="block truncate text-sm font-medium">
									{user.email}
								</span>
							</Dropdown.Header>
							<Dropdown.Item>
								<Link to="/dashboard">Dashboard</Link>
							</Dropdown.Item>
							<Dropdown.Item>Settings</Dropdown.Item>
							<Dropdown.Item>Earnings</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item onClick={handleLogOut}>
								Sign out
							</Dropdown.Item>
						</Dropdown>
					) : (
						<Link to="/login">
							<button className="btn">Login</button>
						</Link>
					)}
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
						{user ? (
							""
						) : (
							<NavLink
								to="/register"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								Register
							</NavLink>
						)}
					</div>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
