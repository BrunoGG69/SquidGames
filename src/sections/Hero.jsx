import bgImage from '../assets/bg.png'
import logo from '../assets/logo.svg'
import workersImage from '../assets/workers.svg'

const Hero = () => {
    return (
        <section id="#homeSection" className={`relative bg-black min-h-screen overflow-hidden`}>
            <div className="absolute inset-0">
                <img
                    src={bgImage}
                    alt="Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-4 py-8">
                <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[93%] max-w-none sm:w-[400px] md:w-[600px]"
                    />
                </div>

                <div className="w-full flex items-center justify-center">
                    <img
                        src={workersImage}
                        alt="workers"
                        className="w-[1000px] max-w-none mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;