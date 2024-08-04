import Sidebar from "../Sidebar"
import Header from "../Header"
import MainContentArea from '../MainContentArea'
import Footer from "../Footer"

import './index.css'

const Home = () => (
    <div className="home-container">
        <Sidebar />
        <div className="main-area">
            <Header />
            <MainContentArea />
            <Footer />
        </div>
    </div>
)

export default Home
