import {useState,useEffect} from "react"
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"
import ProductCards from "../ProductCards"
import Roll from 'react-reveal/Roll';
const CarouselCards  = ({category,data,keyVal,keys,loading}) => {

    const [sliderWidth,setSliderWidth] = useState()
   
    const specifiCategory = keyVal.filter((val,index) => {
        return data[val].productCatagory === category
    })
    useEffect(() => {
    setSliderWidth(document.querySelector(".slider").offsetWidth)
    function handleResize(){
        setSliderWidth(document.querySelector(".slider").offsetWidth)
    }
    window.addEventListener('resize', handleResize)
    return _ => {
        window.removeEventListener("resize", handleResize)
    }
    
},[sliderWidth])
console.log(loading)
    return <>
   <div className="w-11/12 m-auto mt-5 relative  overflow-hidden card-slider" style={{height:"auto"}}>
   <div className="flex h-ful" style={{width:"2720px"}}>
    {specifiCategory.slice(0,10).map((val,index) => {

     return <ProductCards product={data[val]} loading={false} id={val}/>
  
       
       })}
    </div>
    
   </div>
   <div className="w-11/12 m-auto relative -top-64">
 <button className="text-5xl relative -left-10 float-left rounded-full text-black bg-white my-2 mx-5 shadow-xl hover:bg-indigo-700 hover:text-white transition-all duration-500" onClick={() => {
                                 document.querySelectorAll(".card-slider")[keys].scrollLeft-=sliderWidth
                        }} ><IoMdArrowDropleft /></button>
                        <button className="bg-white relative -right-10 float-right text-black text-5xl rounded-full my-2 mx-5 shadow-xl translate-y-0 shadow-xl hover:bg-indigo-700 hover:text-white transition-all duration-500" onClick={() => {
                            
                                document.querySelectorAll(".card-slider")[keys].scrollLeft+=sliderWidth
                        }}><IoMdArrowDropright/></button>
 </div>
 
     
    </>
}

export default CarouselCards;

