import { Outlet } from "react-router-dom";
import SideBar from "../Component/Shared/SideBar/SideBar";

const DashBoardLayout = () => {
    return (
        <div className="flex gap-5">
                <SideBar></SideBar>
            <div className="p-5 w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;