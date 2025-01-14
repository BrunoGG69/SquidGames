import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import PropTypes from 'prop-types';
import bgImage from "../assets/bg.png";

const ConfirmationStep = ({ confirmBool }) => {
    return (
        <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-4">Are you sure you want to continue?</h2>
            <p className="mb-6 text-lg">This decision may have life-changing consequences.</p>
            <div className="space-x-4">
                <motion.button
                    onClick={() => confirmBool(true)}
                    className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition duration-300 text-lg font-semibold"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    Yes
                </motion.button>
                <motion.button
                    onClick={() => confirmBool(false)}
                    className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition duration-300 text-lg font-semibold"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    No
                </motion.button>
            </div>
        </motion.div>
    );
};

ConfirmationStep.propTypes = {
    confirmBool: PropTypes.func.isRequired,
};

const PersonalInfoStep = ({ submitInfo }) => {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        submitInfo({ name, dateOfBirth });
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <label htmlFor="name" className="block mb-2 font-semibold text-lg">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg"
                    placeholder="Enter your full name"
                />
            </div>
            <div>
                <label htmlFor="dob" className="block mb-2 font-semibold text-lg">
                    Date of Birth
                </label>
                <input
                    type="date"
                    id="dob"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-black text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-pink-400 text-lg"
                />
            </div>
            <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-white text-pink-600 rounded-full hover:bg-gray-200 transition duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                Continue
            </motion.button>
        </motion.form>
    );
};

PersonalInfoStep.propTypes = {
    submitInfo: PropTypes.func.isRequired,
};

const FinalStep = ({ isItComplete }) => {
    return (
        <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-4">Registration Complete</h2>
            <p className="mb-6 text-lg">You&#39;re now registered for the games. Are you ready to play?</p>
            <motion.button
                onClick={isItComplete}
                className="px-8 py-3 bg-white text-pink-600 rounded-full hover:bg-gray-200 transition duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                Finish
            </motion.button>
        </motion.div>
    );
};

FinalStep.propTypes = {
    isItComplete: PropTypes.func.isRequired,
};

const CallScreen = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
    });
    const navigate = useNavigate();

    const isItConfirmed = (confirmed) => {
        if (confirmed) {
            setStep(1);
        } else {
            navigate("/");
        }
    };

    const handlePersonalInfo = (data) => {
        setFormData(data);
        setStep(2);
    };

    const ifCompleted = () => {
        console.log("Registration complete!", formData);
        alert("You've been registered for the games. Good luck!");
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white relative">
            <div className="absolute inset-0">
                <img
                    src={bgImage}
                    alt="Squid Game Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="w-full max-w-md p-8 space-y-8 bg-[#e93e7d] bg-opacity-80 rounded-3xl shadow-xl relative z-10">
                <motion.h1
                    className="text-5xl font-bold text-center mb-6 font-squid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Squid Game Registration
                </motion.h1>
                {step === 0 && <ConfirmationStep confirmBool={isItConfirmed} />}
                {step === 1 && <PersonalInfoStep submitInfo={handlePersonalInfo} />}
                {step === 2 && <FinalStep isItComplete={ifCompleted} />}
            </div>
        </div>
    );
};

export default CallScreen;