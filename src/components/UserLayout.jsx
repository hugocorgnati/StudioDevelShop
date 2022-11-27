import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import userLayout from '../style/userLayout.css'
import Banner from './Banner';

const UserLayout = () => {
    return (
        <div className="userLayout">
            <NavBar />
            <Banner title="Conocenos" direction="https://studiodevel.com" />
            <Outlet />
            <Footer />
        </div>
    );
};


export default UserLayout