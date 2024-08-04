import { Link } from "react-router-dom"

import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineShoppingCart, MdOutlineBarChart } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io"

import './index.css'

const Sidebar = () => (
    <div className="sidebar-container">
        <h1 className="sidebar-heading">HORIZON <span className="free">FREE</span></h1>
        <hr />

        <div className="dashboard-container">
            <Link to="/" className="dashboard-card">
                <IoHomeSharp className="icon" />
                <h2 className="dashboard">Dashboard</h2>
            </Link>
            <Link to="/marketplace" className="dashboard-card">
                <MdOutlineShoppingCart className="icon" />
                <h2 className="dashboard">NFT Marketplace</h2>
            </Link>
            <Link to="/tables" className="dashboard-card">
                <MdOutlineBarChart className="icon" />
                <h2 className="dashboard">Tables</h2>
            </Link>
            <Link to="/konban" className="dashboard-card">
                <FaChartPie className="icon" />
                <h2 className="dashboard">Konban</h2>
            </Link>
            <Link to="/profile" className="dashboard-card">
                <FaRegUser className="icon" />
                <h2 className="dashboard">Profile</h2>
            </Link>
            <Link to="/signin" className="dashboard-card">
                <IoIosLock className="icon" />
                <h2 className="dashboard">Sign In</h2>
            </Link>
        </div>
    </div>
)

export default Sidebar
