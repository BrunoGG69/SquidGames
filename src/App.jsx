import Hero from "./sections/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./sections/About.jsx";
import GameList from "./sections/GameList.jsx";

const App = () => {
    return (
        <div className="relative">
            {/*<Navbar />*/}
            <Hero />
            <About />
            <GameList/>
        </div>
    )
}

export default App


