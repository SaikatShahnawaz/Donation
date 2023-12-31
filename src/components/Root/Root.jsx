import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div>
            <div className="">
            <NavBar></NavBar>
            </div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;