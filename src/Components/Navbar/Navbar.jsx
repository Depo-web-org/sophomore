import logo from '../../../public/logos/logo.svg'
import { Link } from "react-router-dom"
const Navbar = () => {

  return (
    <nav className="  z-50  fixed top-4  w-full">
        <div className="bg-white/20  shadow-black/10 backdrop-blur-[5px] border border-white/20 w-[calc(100%-124px)] xl:w-4/5 transition-all duration-300 h-16 mx-auto shadow-sm rounded-full flex  ">
        <div className="flex w-1/4 justify-start items-center">
            <img src={logo} alt="" className="ml-5"/>
            <p className="bg-gradient-to-r from-primary  via-primary   to-secondary bg-clip-text text-transparent text-2xl font-bold">
            Sophomore
            </p>
        </div>
        <div className="flex-1  flex justify-end items-center mr-5  ">
            <div className="w-auto text-white flex  items-center gap-8       ">
                <ul className="flex gap-x-7 font-semibold">
                    <li>
                        <Link to={'/'}>
                        Home
                        </Link>
                    </li>
                    <li>
                    <Link to={'/about'}>
                    About Us
                        </Link>
                    </li>
                    <li>
                    <Link to={'/contact'}>
                    Contact Us
                        </Link>

                    </li>
                </ul>
                <button className="bg-primary py-2 px-6 rounded-md font-semibold">
                Login
                </button>
            </div>

        </div>
        </div>
    </nav>
 )
}

export default Navbar