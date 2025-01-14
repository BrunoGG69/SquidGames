import { motion } from "motion/react";
import bgImage from "../assets/bg.png";
import logo from "../assets/logo.svg";
import workersImage from "../assets/workers.svg";

const Hero = () => {
    return (
        <section
            id="homeSection"
            className={`relative bg-black min-h-screen overflow-hidden`}
        >
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={bgImage}
                    alt="Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-4 py-8">
                <motion.div
                    className="flex-1 flex items-center justify-center w-full overflow-hidden"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[93%] max-w-none sm:w-[400px] md:w-[600px]"
                    />
                </motion.div>
                <motion.div
                    className="w-full flex items-center justify-center"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        ease: "easeOut",
                    }}
                >
                    <img
                        src={workersImage}
                        alt="workers"
                        className="w-[1000px] max-w-none mx-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
