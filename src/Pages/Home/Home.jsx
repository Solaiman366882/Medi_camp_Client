import { Helmet } from "react-helmet";
import Banner from "../../Component/Home/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Atom | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;