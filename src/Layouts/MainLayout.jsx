import { Outlet } from "react-router-dom";
import Header from "../Component/Shared/Header/Header";
import Footer from "../Component/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "../Component/Shared/Loader/Loader";

const MainLayout = () => {
	const [isPreLoad, setPreLoad] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setPreLoad(false);
		}, 2000);
	}, []);
	return isPreLoad ? (
		<Loader></Loader>
	) : (
		<div>
			<div className="shadow-xl">
				<Header></Header>
			</div>
			<div>
				<Outlet></Outlet>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default MainLayout;
