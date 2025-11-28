import {useState,useEffect} from "react"
import {useHistory} from "react-router-dom"
import {mainCategories} from "../Helper/ProductConstant"
const Filter = () => {
    const history = useHistory()
    return <>
        <select className="py-2 border-2 border-transparent hover:border-indigo-700 transition-all duration-700 rounded-xl bg-white text-xl" onChange={(e) => {
            e.preventDefault()
            
            if(e.target.value == "All") history.push(`/catagory`)

            else history.push(`/catagory/${e.target.value}`)
        }}>
            <option default hidden>category List</option>
            {mainCategories.map((list,index) => {
                return <option value={list}>{list}</option>
            })}
        </select>
    </>
}

export default Filter;