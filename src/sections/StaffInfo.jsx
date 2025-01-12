import salesman from "../assets/staff/salesman.jpg";
import frontman from "../assets/staff/frontman.jpg";
import worker from "../assets/staff/worker.jpg";
import soldier from "../assets/staff/soldier.jpg";
import manager from "../assets/staff/manager.jpg";
import host from "../assets/staff/host.jpg";

const staffData = [
    {
        id: 1,
        name: "The Host",
        image: host,
        description: "The mastermind and ultimate authority behind the Squid Games. He might be with you while you play.",
    },
    {
        id: 2,
        name: "The Frontman",
        image: frontman,
        description: "The Frontman is the leader of the game. He is the one who makes all the decisions and is responsible for the game's success.",
    },
    {
        id: 3,
        name: "The Manager",
        image: manager,
        description: "Responsible for organizing, monitoring, and enforcing the Games.",
    },
    {
        id: 4,
        name: "The Soldiers",
        image: soldier,
        description: "Responsible for enforcing the rules of the game. Their primary role is to handle the elimination process.",
    },
    {
        id: 5,
        name: "The Workers",
        image: worker,
        description: "Responsible for setting up the games and ensuring that everything runs smoothly.",
    },
    {
        id: 6,
        name: "The Salesman",
        image: salesman,
        description: "The first person to introduce you to the game. He is the one who gives you the option to play the game and win a huge amount of money.",
    }
];

const StaffInfo = () => {
    return (
        <div className="flex items-center justify-center px-6 pb-20">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold p-16 font-squid text-center bg-black">
                    About The Staff
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {staffData.map((staff) => (
                        <div
                            key={staff.id}
                            className="border-4 border-gray-300 rounded-3xl p-2 shadow-xl w-full max-w-md mx-auto relative group transition-all hover:scale-110 hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.3)]"
                        >
                            <div className="relative">
                                <img
                                    src={staff.image}
                                    alt={staff.name}
                                    className="w-full h-auto rounded-2xl shadow-lg object-fill"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent rounded-2xl">
                                    <div className="flex items-end justify-center h-full p-4">
                                        <p className="text-white text-lg font-semibold text-center font-squid mb-4">
                                            {staff.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-center px-4 text-lg md:text-xl">
                                    {staff.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StaffInfo;
