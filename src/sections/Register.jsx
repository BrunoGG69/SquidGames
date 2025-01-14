import { useNavigate } from 'react-router-dom';
import registrationCard from '../assets/registerationCard.svg';

const Register = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/registration');
    };

    return (
        <section id="contact" className="flex flex-col justify-center items-center bg-black pb-20">
            <h1 className="text-4xl md:text-5xl font-bold p-16 font-squid text-center bg-black text-white">
                Register Now
            </h1>
            <div className="group w-full max-w-xl h-[350px] [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                        <img
                            src={registrationCard}
                            alt="Registration Card"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center">
                        <p className="text-xl md:text-2xl font-bold mb-4">010-6969</p>
                        <button
                            className="px-6 py-2 bg-[#e93e7d] text-white font-semibold rounded-3xl hover:bg-[#e93e8d] transition-all hover:scale-110"
                            onClick={handleButtonClick}
                        >
                            REGISTER NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
