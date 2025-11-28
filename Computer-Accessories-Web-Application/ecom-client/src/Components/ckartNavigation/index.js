import {Link} from "react-router-dom"
import {useState} from "react"
import CKartUserModal from "../../Components/cKartModal"
import { IoMdCloseCircle,IoMdSearch } from "react-icons/io"
const CkartNavigation = () => {
    const [toogleSearch,setToogleSearch] = useState("open")

    const [modal,setModal] = useState(false)
    const ToogleBtnSearch = () => {
        let search = document.querySelector(".search");
        let btnSearch = document.querySelector(".btn-search");
        let expand = document.querySelector(".expand");
        if(toogleSearch === "open"){
            expand.style.width = "50%";
            search.style.width = "100%";
            search.style.visibility = "visible";
            search.style.opacity = "1";
            btnSearch.style.visibility = "visible";
            btnSearch.style.opacity = "1";
            setToogleSearch("close")
        }
        else{
            expand.style.width = "1.25rem";
            search.style.width = "0rem";
            search.style.visibility = "hidden";
            search.style.opacity = "0";
            btnSearch.style.visibility = "hidden";
            btnSearch.style.opacity = "0";
            setToogleSearch("open")
        }
    }
    window.addEventListener("scroll", () => {
        let navBar = document.querySelector("nav")
        let searchBar = document.querySelector(".search-bar")
        if(window.scrollY >= 150){
            navBar.classList.remove("w-11/12")
            navBar.classList.add("w-full")
            navBar.classList.remove("left-20")
            navBar.classList.remove("top-10")
            searchBar.classList.remove("right-16")
            searchBar.classList.add("right-0")
            searchBar.classList.remove("top-32")
            searchBar.classList.add("top-24")
        }
        else{
            navBar.classList.add("w-11/12")
            navBar.classList.remove("w-full")
            navBar.classList.add("left-20")
            navBar.classList.add("top-10")
            searchBar.classList.add("right-16")
            searchBar.classList.remove("right-0")
            searchBar.classList.add("top-32")
            searchBar.classList.remove("top-24")
        }
    })
    return <>
        <header className="w-full flex flex-col ">
            <nav className="flex justify-between items-center h-16 left-20 top-10 text-xl px-4 font-heading shadow-md fixed w-11/12  m-auto rounded-3xl z-50 bg-white transition-all duration-500">
                <Link to="" className="font-logo text-2xl">C-Kart</Link>

                
                <ul className="flex w-1/2 justify-around">
                    <li className="px-2  ">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 hover:border-indigo-900 hover:text-indigo-900">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/catagory" className="transition-all duration-500 border-transparent border-b-2 hover:border-indigo-900 hover:text-indigo-900">Category</Link>
                    </li>
                    <li className="px-2">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 hover:border-indigo-900 hover:text-indigo-900">WhishList</Link>
                    </li>
                    <li className="px-2">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 hover:border-indigo-900 hover:text-indigo-900">Cart</Link>
                    </li>
                    <li className="px-2">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 hover:border-indigo-900 hover:text-indigo-900">Profile</Link>
                    </li>
                    <li className="px-2">
                        <Link to="" className="transition-all duration-500 border-transparent border-b-2 hover:border-indigo-900 hover:text-indigo-900">Aboutus</Link>
                    </li>
                </ul>

                <Link to="" className="bg-indigo-500 text-white px-3 py-2 rounded-2xl" onClick={() => {
                    setModal(true)
                }}>signin/register</Link>
            </nav>
            <div className="fixed right-16 w-5 expand transition-all duration-500 flex flex-row-reverse top-32 z-50 search-bar">
                <input type="text" className="border-2 invisible opacity-0 w-0 search transition-all duration-500 px-2 focus:border-indigo-500" placeholder="Search products here !..."></input>
                <button className="absolute px-4 py-1.5 bg-indigo-500 text-white text-xl btn-search invisible opacity-0 transition-all duration-500">search</button>
                <button className="border-2 px-4 text-3xl rounded-3xl py-1 bg-indigo-600 text-white"onClick={ToogleBtnSearch}>{toogleSearch === "open" ? <IoMdSearch /> : <IoMdCloseCircle />}</button>
            </div>
        </header>
    {modal === true ?  <CKartUserModal stateChanger={setModal} /> :""}

    </>
}

export default CkartNavigation;