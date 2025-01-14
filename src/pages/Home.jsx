import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import GameList from "../sections/GameList.jsx";
import StaffInfo from "../sections/StaffInfo.jsx";
import Register from "../sections/Register.jsx";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <About />
            <GameList/>
            <StaffInfo />
            <Register/>
        </div>
    )
}

export default Home


