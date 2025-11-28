import { Link } from "react-router-dom"

const __404 = () => {

    return <>
        <div className="w-full flex flex-col items-center justify-center h-screen ">
            <img src="/images/404.png" className="w-1/2" alt="" />
            <h1 className="text-2xl font-heading">Your are in a wrong page  
                <Link to="/" className="text-blue-900 text-2xl"> Visit C-Kart</Link>
            </h1>
        </div>
    </>
}

export default __404;