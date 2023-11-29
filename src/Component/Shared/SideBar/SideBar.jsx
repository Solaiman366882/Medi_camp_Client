import {
	FaEdge,
	FaHouseMedical,
	FaPuzzlePiece,
	FaRegRegistered,
	FaUser,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
	const isAdmin = true;
	const isOrganizer = false;
	return (
		<div>
			<div className="sidebar bg-primary text-white py-5">
				{isAdmin ? (
					
					<ul className="sidebar-list ">
						<h2>Admin</h2>
						<li>
							<NavLink
								to="/dashboard/profile"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaPuzzlePiece className="list-icon"></FaPuzzlePiece>
								<span> Admin Profile</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/allUsers"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaUser className="list-icon"></FaUser>
								<span>All Users</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/add-a-camp"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaHouseMedical className="list-icon"></FaHouseMedical>
								<span>Add Camp</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/manage-camps"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaEdge className="list-icon"></FaEdge>
								<span>Manage Camps</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/manage-registered-camps"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaRegRegistered className="list-icon"></FaRegRegistered>
								<span>Registered Camps</span>
							</NavLink>
						</li>
					</ul>
				) : isOrganizer ? (
					<ul className="sidebar-list ">
						<h2>isOrganizer</h2>
						<li>
							<NavLink
								to="/dashboard/profile"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaPuzzlePiece className="list-icon"></FaPuzzlePiece>
								<span>Profile</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/add-a-camp"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaHouseMedical className="list-icon"></FaHouseMedical>
								<span>Add Camp</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/manage-camps"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaEdge className="list-icon"></FaEdge>
								<span>Manage Camps</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/manage-registered-camps"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaRegRegistered className="list-icon"></FaRegRegistered>
								<span>Registered Camps</span>
							</NavLink>
						</li>
					</ul>
				) : (
					<ul className="sidebar-list ">
						<li>
							<NavLink
								to="/dashboard/profile"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaPuzzlePiece className="list-icon"></FaPuzzlePiece>
								<span>Profile</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/add-a-camp"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaHouseMedical className="list-icon"></FaHouseMedical>
								<span>Add Camp</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/manage-camps"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaEdge className="list-icon"></FaEdge>
								<span>Manage Camps</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard/manage-registered-camps"
								className={({ isActive, isPending }) =>
									isPending
										? "pending"
										: isActive
										? "active"
										: ""
								}
							>
								<FaRegRegistered className="list-icon"></FaRegRegistered>
								<span>Registered Camps</span>
							</NavLink>
						</li>
					</ul>
				)}
				{/* <ul className="sidebar-list ">
					<li>
						<NavLink
							to="/dashboard/profile"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
                            <FaPuzzlePiece className="list-icon"></FaPuzzlePiece>
							<span>Profile</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/add-a-camp"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaHouseMedical className="list-icon"></FaHouseMedical>
							<span>Add Camp</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/manage-camps"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaEdge className="list-icon"></FaEdge>
							<span>Manage Camps</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dashboard/manage-registered-camps"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FaRegRegistered className="list-icon"></FaRegRegistered>
							<span>Registered Camps</span>
						</NavLink>
					</li>
				</ul> */}
			</div>
		</div>
	);
};

export default SideBar;
