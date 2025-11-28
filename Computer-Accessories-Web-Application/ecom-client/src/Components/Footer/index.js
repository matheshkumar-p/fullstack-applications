import {Link} from "react-router-dom"
import { RiFacebookCircleFill,RiLinkedinBoxFill,RiInstagramLine } from "react-icons/ri"
const CkartFooter = () => {
    return <>
        <footer className="w-full h-auto mt-10 " style={{background:"#222529"}}>
            <section className="flex flex-col items-center p-3">
                <h1 className="text-3xl text-white font-heading">Subscribe To Newsletter</h1>
                <form className="flex relative mt-3 ">
                    <input type="text" className="w-96 ring-2 border-2 border-indigo-700 p-1 font-para text-xl rounded-xl" placeholder="Enter your Email"></input>
                    <button className="absolute right-0 ring-2 bg-indigo-700 text-white font-para py-2 px-2 rounded-xl">Subscribe</button>
                </form>
            </section>
            <section className="w-11/12 border-b-2 border-gray-600  justify-around m-auto py-5 flex">
                <div className="h-inherit leading-8">
                    <h1 className="text-3xl m-2 text-white">AboutUs</h1>
                    <h1 className="text-4xl m-2 text-white font-logo">C-Kart</h1>
                    <p className="w-48  m-2 text-white">
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ipsum dolor...
                    </p>
                    <Link to="" className="text-indigo-700">readmore</Link>
                </div>
                <div>
                <h1 className="text-3xl m-2 text-white">Contact</h1>
                <h2 className="text-2xl m-2 text-white">Address</h2>
                <h3 className="text-gray-400 m-2 font-para">Xyz street , city ,state</h3>
                <h2 className="text-2xl m-2 text-white">Contact</h2>
                <h3 className="text-gray-400 m-2 font-para">+91 8726546789</h3>
                <div className="flex mt-3">
                    <RiFacebookCircleFill className="text-3xl text-white m-1" />
                    <RiInstagramLine  className="text-3xl text-white m-1"/>
                    <RiLinkedinBoxFill  className="text-3xl text-white m-1"/>
                </div>
                </div>
                
                      
              <div>
                <h1 className="text-3xl m-2 text-white">Navigation</h1>

              <ul className="flex flex-col text-white text-xl font-para">
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Home</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Category</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">WhishList</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Cart</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Profile</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Aboutus</Link>
                    </li>
                </ul>
              </div>
                <div>
                <h1 className="text-3xl m-2 text-white">Catagory</h1>
                <ul className="flex flex-col text-white text-xl font-para ">
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Adaptors</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Audio & Video Accessories</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Components</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Laptop Accessories</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Storage Devices</Link>
                    </li>
                    <li className="px-2 py-1">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 ">Keyboard & Mouse</Link>
                    </li>
                </ul>
                </div>
            </section>
            <div className="w-11/12 m-auto  flex justify-around">
            <h1 className=" text-white m-5">© C-Kart. © 2021. All Rights Reserved</h1>

            </div>

        </footer>
    </>
}

export default CkartFooter;