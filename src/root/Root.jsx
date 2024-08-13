import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto pt-5">
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Root;