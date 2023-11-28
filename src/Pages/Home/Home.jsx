import { Helmet } from "react-helmet";
import Banner from "../../Component/Home/Banner/Banner";
import Quality from "../../Component/Home/Quality/Quality";
import Popular from "../../Component/Home/Popular/Popular";

const Home = () => {
	return (
		<div>
			<Helmet>
				<title>Atom | Home</title>
			</Helmet>
			<div>
				<Banner></Banner>
			</div>
			<div className="max-w-screen-xl mx-auto px-5">
				<div >
					<Quality></Quality>
				</div>
				<div>
					<Popular></Popular>
				</div>
			</div>
		</div>
	);
};

export default Home;
