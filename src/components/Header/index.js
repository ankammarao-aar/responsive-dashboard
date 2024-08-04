import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

import './index.css'

const Header = () => (
    <div className="header-container">
        <h1 className="header-heading">Main Dashboard</h1>
        <div className="header-card">
            <div className="header-search-card">
                <IoSearchSharp className="header-icons" />
                <input type='search' className="search" placeholder="Search" />
            </div>
            <FaRegBell className="header-icons" />
            <FaMoon className="header-icons" />
            <FiAlertCircle className="header-icons" />
        </div>
    </div>
)

export default Header
