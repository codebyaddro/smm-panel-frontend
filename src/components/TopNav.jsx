import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TopNav = () => {
    return (
        <div className="container mx-auto flex justify-between items-center p-4">
           <header className="max-w-7xl mx-auto w-full flex justify-between items-center">
             {/* TOP NAV */}
            <div className="flex justify-center items-center space-x-6">
                {/* logo */}
                <div className="text-4xl font-bold">
                    <a href="/">MyShop</a>
                </div>
                {/* navigation links */}
                <nav className="space-x-6 text-lg font-">
                    <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
                    <a href="/products" className="text-gray-700 hover:text-blue-500">Services</a>
                    <a href="/about" className="text-gray-700 hover:text-blue-500">About Us</a>
                    <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact Us</a>
                </nav>
            </div>
            {/* log in button */}
            <div>
                <button className="flex items-center gap-2 text-lg bg-button-primary px-4 py-2 text-white rounded hover:bg-button-primary-hover transition duration-300">
                    <a href="/login" className="">
                        Log In
                    </a>
                   <FontAwesomeIcon icon={faArrowRightToBracket} />
                </button>
            </div>
           </header>
        </div>
    );
};

export default TopNav;