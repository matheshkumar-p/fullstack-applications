import {useSelector,useDispatch} from "react-redux"
import * as actionsTypes from "../../Redux/constants/cartConstants"
import ScaleLoader from "react-spinners/ScaleLoader";
import Fade from 'react-reveal/Fade';

import { IoIosEye,IoIosCart,IoIosHeart,IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"
import {AddToCart} from "../../Redux/actions/cartActions"
const ProductCards = ({product,id,loading}) => {
    const dispatch = useDispatch()
    console.log(loading)
    if(loading === false){
        const {_id,productName,productPrice,offer,quantity,productImage,subCategory} = product

        return <>
           
              <Fade top>
              <div className="w-64 h-auto p-4 bg-white border-2 rounded-2xl shadow-md m-2" >
        <div className="w-48 h-48 relative">
            
            <img src={productImage[0]} alt="product" className="w-48 h-48 absolute opacity-1 transition-all duration-500" onMouseEnter={(e) => {
                e.target.style.opacity="0";
            }} onMouseLeave={(e) => {
                e.target.style.opacity="1";
            }}></img>
            <img src={productImage[1]} className="w-48 h-48 " alt="product"></img>
    
    
        </div>
       <div>
       <h1 className="font-para text-xl text-center font-bold">{productName.slice(0,10)+".."}</h1>
        <h2 className="font-para  text-center font-500">{subCategory}</h2>
        <h3 className="font-para line-through">M.R.P : {productPrice}</h3>
        <h4 className="font-para text-xl font-bold">Price : {Math.round(productPrice-(productPrice *offer)/100)} </h4>
        <h5 className="font-para text-gray-500 ">You saved Rs.{Math.round((productPrice *offer)/100)}({offer}%)</h5>
       </div>
        <div className="flex btns justify-center mt-2 ">
            <button className="bg-indigo-500 px-2 py-1 text-xl text-white m-1"><IoIosHeart /></button>
            <button className="bg-indigo-500 px-2 py-1 text-xl text-white m-1" value={id} onClick={(e) => {
                e.preventDefault()
                console.log(e.target.value)
                dispatch(AddToCart(e.target.value))
            }}><div value={id}  style={{"pointer-events":"none"}}>
                    <IoIosCart style={{"pointer-events": "none"}} />
                </div></button>
            <button className="bg-indigo-500 px-2 py-1 text-xl text-white m-1"><IoIosEye /></button>
        </div>
    </div>
              </Fade>
            
        </>
    }
    else if(loading === true){
        return <>

    
       <div className="w-64 h-72 bg-white p-4 border-2 rounded-2xl shadow-md m-2 flex justify-center items-center" >
        
                <ScaleLoader color="#2A2992" loading  size={15}></ScaleLoader>
        
        </div>
       
        </>
    }
    return <></>
   
}

export default ProductCards;