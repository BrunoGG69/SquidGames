import game1 from "../assets/games/game1.jpg";
import game2 from "../assets/games/game2.jpg";
import game3 from "../assets/games/game3.jpg";
import game4 from "../assets/games/game4.jpg";
import game5 from "../assets/games/game5.jpg";
import game6 from "../assets/games/game6.jpg";

const GameList = () => {
    const games = [
        { id: 1, src: game1, alt: "Game 1", title: "1. Red Light, Green Light", description: "Players must cross the field while following commands. Move when the 'Green Light' is called and freeze when 'Red Light' is called. One mistake can be deadly." },
        { id: 2, src: game2, alt: "Game 2", title: "2. Sugar Honeycombs", description: "Participants must carefully carve out a shape from a fragile honeycomb candy using a needle without breaking it. Precision and patience are the keys to survival." },
        { id: 3, src: game3, alt: "Game 3", title: "3. Tug Of War", description: "Two teams compete to pull a rope over a designated mark. Strength and teamwork determine the winners, but losing results in a devastating fall." },
        { id: 4, src: game4, alt: "Game 4", title: "4. Marbles", description: "Players pair up to compete in a game of marbles, with the winner taking all of their opponent's marbles. Strategy and luck play significant roles." },
        { id: 5, src: game5, alt: "Game 5", title: "5. Hopscotch", description: "Contestants must leap across a bridge made of glass panels, some of which are strong while others shatter underfoot. Choosing the right path is a matter of life or death." },
        { id: 6, src: game6, alt: "Game 6", title: "6. Squid Game", description: "The final round combines childhood nostalgia with brutal competition. Players must either attack or defend while adhering to the game's specific rules to emerge victorious." },
    ];

    return (
        <section id="gameListSection" className="flex flex-col items-center justify-center pb-32">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-squid text-center">
                Game List
            </h1>
            <div className="carousel w-full max-w-5xl rounded-lg overflow-hidden shadow-lg">
                {games.map((game, index) => (
                    <div
                        key={game.id}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full"
                    >
                        <img
                            src={game.src}
                            alt={game.alt}
                            className="w-full h-[400px] sm:h-[500px] object-cover"
                        />
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ">
                            <h2 className="text-white text-2xl sm:text-3xl font-bold text-center font-squid">
                                {game.title}
                            </h2>
                            <h3 className="text-white text-base sm:text-lg text-center mx-auto px-6 sm:px-8 max-w-xl">
                                {game.description}
                            </h3>


                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a
                                href={`#slide${index === 0 ? games.length : index}`}
                                className="btn btn-circle text-white bg-gray-800 bg-opacity-75 hover:bg-opacity-100"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${(index + 1) % games.length + 1}`}
                                className="btn btn-circle text-white bg-gray-800 bg-opacity-75 hover:bg-opacity-100"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GameList;

// These are all the carousel components I tried: (ended up going with the DaisyUI one)
// https://flowbite.com/docs/components/carousel/
// https://www.material-tailwind.com/docs/react/carousel
// https://tw-elements.com/docs/standard/components/carousel
// https://preline.co/docs/carousel.html
// https://tailwindflex.com/@fagundo/image-carousel