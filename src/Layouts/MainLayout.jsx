import { Outlet } from "react-router-dom";
import Header from "../Component/Shared/Header/Header";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
    return (
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