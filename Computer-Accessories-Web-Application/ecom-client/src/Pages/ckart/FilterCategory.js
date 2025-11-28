import {useState,useEffect} from "react"
// import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"
import ProductCards from "../../Components/ProductCards"

import __404 from "../../Error/404"
import {Route} from "react-router-dom"
import {mainCategories} from "../../Helper/ProductConstant"
import {useParams} from "react-router-dom"
import {getProducts as listProducts} from "../../Redux/actions/productActions"
import {useDispatch,useSelector} from "react-redux"
import CkartNavigation from "../../Components/ckartNavigation";
import CkartFooter from "../../Components/Footer";
import CardLoading from "../../Helper/CardLoading";
import Filter from "../../Components/Filter"
const FilterCategory  = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const getProductList =useSelector((state) => state.getProduct)

    const {loading,products} = getProductList
    console.log(loading)
    
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])
   
  console.log(mainCategories.includes(params.catagory))

    return <>
{mainCategories.includes(params.catagory) ? 
     loading === false ?<>
        <CkartNavigation />
        <div className="mt-44 w-10/12 h-12 m-auto bg-white border-2  rounded-xl transtion-all duration-500">
        <Filter />
        </div>
        <div className="w-11/12  h-auto  m-auto flex justify-center flex-wrap ">
       
         {Object.keys(products.products).filter((val,index) => {
             return products.products[val].productCatagory === params.catagory
         }).map((value,index) => {
    
            return <ProductCards product={products.products[value]} loading={false} id={value}/>
         
              
              })
         
         }
        
       </div>
         <CkartFooter />
       </> :
       <>
       <CkartNavigation/>
       <CardLoading/>
       <CkartFooter/>
       </>
      : <Route component={__404} />
       } 

    
    </>
}

export default FilterCategory;

