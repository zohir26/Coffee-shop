import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const MainLayout = () => {
    return (        
       <div>
            <div className="h-16">
            <Navbar></Navbar>
            </div>
        <div className="min-h-[calc(100vh-292px)]">
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
        </div>
        
    );
};

export default MainLayout;