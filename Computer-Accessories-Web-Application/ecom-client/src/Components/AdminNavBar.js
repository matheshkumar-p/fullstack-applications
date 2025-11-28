import {Link} from 'react-router-dom'
import {RiDashboardLine,RiOrderPlayLine,RiProductHuntLine,RiQuestionnaireLine,RiFeedbackLine} from "react-icons/ri"
import Button from './Button'
const AdminNavBar = () =>{
    const commonStyle = {
        li:"px-3 py-2 transition-all duration-500 flex items-center border-transparent border-b-2 hover:border-red-900 hover:text-red-900 "
    }
    return<>
        <aside className="text-black  font-body flex items-center justify-around w-full fixed h-16 text-xl shadow-xl">
            <Link to="#" className="text-3xl m-3 ">OShop</Link>
            <ul className="flex rounded-3xl justify-evenly items-center text-black w-1/2">
                <li >
                    <Link to="#" class={commonStyle.li}><RiDashboardLine className="mr-2" /> Dashboard</Link>
                </li>
                <li>
                    <Link to="#"  class={commonStyle.li}><RiOrderPlayLine className="mr-2"  />Orders</Link>
                </li>
                <li>
                    <Link to="#"  class={commonStyle.li}><RiProductHuntLine className="mr-2"  /> Product</Link>
                </li>
                <li>
                    <Link to="#"  class={commonStyle.li}><RiFeedbackLine className="mr-2"  /> Reviews</Link>
                </li>
                <li>
                    <Link to="#"  class={commonStyle.li}><RiQuestionnaireLine className="mr-2"  /> Queries</Link>
                </li>
            </ul>
            <Button btnName="Logout"></Button>
        </aside>
    </>
}

export default AdminNavBar;