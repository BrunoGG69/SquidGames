import game1 from "../assets/games/game1.jpg";
import game2 from "../assets/games/game2.jpg";
import game3 from "../assets/games/game3.jpg";

const AboutMe = () => {
    return (
        <section id = "#aboutSection" className="flex items-center justify-center bg-black text-white px-6 py-12 my-32">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src={game3}
                        alt="Game 3"
                        className="w-full h-auto rounded-3xl shadow-lg hover:scale-105 transition-all"
                    />
                    <img
                        src={game2}
                        alt="Game 2"
                        className="w-full h-auto rounded-3xl shadow-lg transition-all hover:scale-105"
                    />
                    <img
                        src={game1}
                        alt="Game 1"
                        className="col-span-2 w-full h-auto rounded-3xl shadow-lg transition-all hover:scale-105"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-squid">
                        Squid Games
                    </h1>
                    <p className="text-lg mb-6 leading-relaxed font-squid">
                        A game which can make your life or end it. Players will play a set of 6 childhood games and with each round, some ought to be eliminated. If you survive till the end, you win a cash prize of 45.6 billion won.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
