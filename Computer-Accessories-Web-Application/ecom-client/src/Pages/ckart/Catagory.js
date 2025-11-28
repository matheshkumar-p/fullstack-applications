import {useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import CkartNavigation from "../../Components/ckartNavigation"
import CkartFooter from "../../Components/Footer"
import ProductCards from "../../Components/ProductCards"
import CardLoading from "../../Helper/CardLoading"
import {getProducts as listProducts} from "../../Redux/actions/productActions"
import Filter from "../../Components/Filter"

const Catagory = () => {
    const dispatch = useDispatch()
    const getProductList =useSelector((state) => state.getProduct)
   
    const {loading,products} = getProductList
    console.log(products.products)
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])
    console.log(loading)
    return <>
   
        {loading === false ? (<>
            <CkartNavigation />
            <div className="mt-44 w-10/12 h-12 m-auto bg-white  border-2  rounded-xl transtion-all duration-500">
        <Filter />
        </div>

            <div className="w-11/12  h-auto  m-auto flex justify-center flex-wrap ">
            
            {Object.keys(products.products).map((val,index) => {
                return <ProductCards loading={loading} product={products.products[val]} id={val}/>
            })}

            </div>
            <CkartFooter/>
            
        </>):<>
        <CkartNavigation />
           <CardLoading />
            <CkartFooter/>
        </>}
        
    </>
}

export default Catagory;