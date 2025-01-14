import { motion } from 'framer-motion';
import game1 from "../assets/games/game1.jpg";
import game2 from "../assets/games/game2.jpg";
import game3 from "../assets/games/game3.jpg";

const AboutMe = () => {
    return (
        <motion.section
            id="aboutSection"
            className="flex items-center justify-center bg-black text-white px-6 py-12 my-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                    <motion.img
                        src={game3}
                        alt="Game 3"
                        className="w-full h-auto rounded-3xl shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.img
                        src={game2}
                        alt="Game 2"
                        className="w-full h-auto rounded-3xl shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <motion.img
                        src={game1}
                        alt="Game 1"
                        className="col-span-2 w-full h-auto rounded-3xl shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4 font-squid"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Squid Games
                    </motion.h1>
                    <motion.p
                        className="text-lg mb-6 leading-relaxed font-squid"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        A game which can make your life or end it. Players will play a set of 6 childhood games and with each round, some ought to be eliminated. If you survive till the end, you win a cash prize of 45.6 billion won.
                    </motion.p>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutMe;
