import {useState,useEffect} from "react"
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io"

const BannerSlider = ({product}) => {
    const [data,setData] = useState()
    const [key,setKey] = useState()
    const [sliderWidth,setSliderWidth] = useState()
    const [sliderIndex,setSliderIndex] = useState(0)

    useEffect(() => {
            setData(product)
            setKey(Object.keys(product))
        setSliderWidth(document.querySelector(".slider").offsetWidth)
        function handleResize(){
            setSliderWidth(document.querySelector(".slider").offsetWidth)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener("resize", handleResize)
        }
       

    },[sliderWidth,product])
    function ChangeOver(){
        document.querySelector(".scroll").style.visibility = "visible"
        document.querySelector(".scroll").style.opacity = "1"
    }
    function ChangeLeave(){
        document.querySelector(".scroll").style.visibility = "hidden"
        document.querySelector(".scroll").style.opacity = "0"
    }

    



    return <>
         <div className="w-11/12 m-auto bg-white shadow-md rounded-2xl border-2 overflow-x-hidden slider overflo-y-hidden"style={{height:"60%"}} onMouseOver={ChangeOver} onMouseLeave={ChangeLeave}>
                    <div className="h-full flex " style={{width: "300%"}}>
                       {data !== undefined && key !== undefined ?(
                            key.slice(0,3).map((productKey,index) => {
                                const {productName,productDescription,productImage,productPrice} = data[productKey]
                                return <>
                                    <div className={`w-full h-full flex p-4 items-center  text-black`} >
                                        <div className="w-1/2 flex flex-col pl-10">
                                        <h1 className="font-logo text-5xl p-2">{productName}</h1>
                                           <p className="font-para p-2 text-2xl">{productDescription}</p>
                                           <h3 className="font-heading p-2 text-xl">{"Rs"+ " " +productPrice}</h3>
                                           <div>
                                           <button className="py-2 px-10 rounded-2xl text-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 text-white hover:shadow-xl transition-all duration-500">OrderNow</button>

                                           </div>
                                        </div>
                                         
                                   
                                    {productImage.map((image,index) => {
                                        return <>
                                        <div>
                                          {index === 0 ?   <img src={`${image}`} className="w-80  relative top-10 z-10 bg-white rounded-full" alt=""></img>:
                                            <img src={`${image}`} className="w-80  p-3 relative -top-8 z-0 -left-10 " alt=""></img>
                                          }
                                      
                                        </div>
                                           
                                        </>
                                    })}
                                     </div>
                                </>
                            })
                       ):("")}
                    </div>
            </div>
            <div className="absolute right-1/2 top-1/2 invisible opacity-0 transition-all duration-500 scroll" onMouseOver={ChangeOver} onMouseLeave={ChangeLeave}>
                        <button className="text-5xl rounded-full text-black bg-white my-2 mx-5 shadow-xl" onClick={() => {
                                 document.querySelector(".slider").scrollLeft-=sliderWidth
                        }} ><IoMdArrowDropleft /></button>
                        <button className="bg-white text-black text-5xl rounded-full my-2 mx-5 shadow-xl translate-y-0 shadow-xl" onClick={() => {
                            
                                document.querySelector(".slider").scrollLeft+=sliderWidth
                        }}><IoMdArrowDropright /></button>
            </div>
            
    </>
}
export default BannerSlider;