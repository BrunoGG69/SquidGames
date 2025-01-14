import { useState, useEffect } from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.svg";

const navItems = [
    { label: "Home", href: "#homeSection" },
    { label: "About", href: "#aboutSection" },
    { label: "Game List", href: "#gameListSection" },
    { label: "About The Staff", href: "#aboutStaffSection" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const navbarHeight = document.querySelector('nav').offsetHeight;
            window.scrollTo({
                top: element.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) =>
                document.querySelector(item.href)
            );
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].href);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderNavLinks = (isMobile = false) =>
        navItems.map((item, index) => (
            <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`${
                    isMobile
                        ? "block px-3 py-2 text-base"
                        : "px-3 py-2 text-sm"
                } font-medium rounded-md transition-colors ${
                    activeSection === item.href
                        ? "bg-[#e93e7d] text-black"
                        : "text-[#e93e7d] hover:bg-[#e93e7d] hover:bg-opacity-20"
                }`}
            >
                {item.label}
            </a>
        ));

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md font-bold text-[#e93e7d] z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a
                            href="/"
                            onClick={(e) => handleNavClick(e, "#homeSection")}
                            className="flex-shrink-0 flex items-center"
                        >
                            <img
                                src={logo}
                                alt="Profile"
                                className="w-20 h-full rounded-full mr-3"
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {renderNavLinks()}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#e93e7d] hover:bg-[#e93e7d] hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden ${isOpen ? "block" : "hidden"}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {renderNavLinks(true)}
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
