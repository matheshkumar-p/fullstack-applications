import {useState,useEffect} from "react"
import AdminNavBar from "../../Components/AdminNavBar"
const ProductView = () => {
    const [data,setData] = useState()
    const [action,setAction] = useState("Add")
    const [deleteCategory,setDeleteCategory] = useState()
    const [filterCategory,setFilterCategory] = useState("All")
    const [Key,setKey] = useState()
    const [subCategory,setSubCategory] = useState()
    const catagories = ["Adaptors","Audio & Video accessories","Keyboard & Mouse","Components","Laptop Accessories","Storage Devices"]
    const [deleteKey,setDeletKey] = useState([])
    const productDetails = {
        productName:"",
        productDescription:"",
        productPrice:"",
        productCatagory:"",
        subCategory:"",
        productImage:[],
        quantity:"",
        offer:""
    }
    const [product,setProduct] = useState(productDetails)
    const HandleInputChange = (e) => {
        e.preventDefault()
            const {name,value} = e.target;
            if(name === "productCatagory"){
                switch(value){
                    case "Audio & Video accessories" :{
                        setSubCategory("AudioVideoAccessories")
                        break;
                    }
                    case "Keyboard & Mouse" :{
                        setSubCategory("KeyboardMouse")
                        break;
                    }
                    case "Components" :{
                        setSubCategory("Components")
                        break;
                    }
                    case "Laptop Accessories" :{
                        setSubCategory("LaptopAccessories")
                        break;
                    }
                    case "Storage Devices" :{
                        setSubCategory("StorageDevices")
                        break;
                    }
                    default:{
                        setSubCategory()
                    }
                }
              
            }
            // console.log(e.target)
            setProduct({
                ...product,
                [name]:value
            })
           
            
    }
    const subCategoryList={
        AudioVideoAccessories:["PC Headsets","PC Microphones","PC speakers","Webcams"],
        KeyboardMouse:["Numeric Keypads","Gaming Mouse","Gaming Keyboards","Wireless Mouse","Wireless Keyboard"],
        Components:["Fans & Cooling","Graphics Card","Intenal Hardrives","Internal MemoryCard","MotherBoards","Processors"],
        LaptopAccessories:["Bags & sleeves","Laptop Charger","Laptop Batteries","Laptop Skins","screen Protectors"],
        StorageDevices:["External Floppy Drives","External Hardisk","External MemoryCard","Pen Drives"],
    }
    const uploadCloudinary = async (e) =>{
        const files = e.target.files[0]

                    let formData = new FormData();
                    formData.append('file',files);
                    formData.append('upload_preset','o2e0xoco')
                 await fetch("https://api.cloudinary.com/v1_1/da8ygcsci/image/upload",{
                        method:"POST",
                        body:formData
                    }).then((res) => {return res.json()})
                    .then((res) => {
                        
                        setProduct({
                            ...product,
                            "productImage":[...product.productImage,res.secure_url]
                        })
                        e.target.classList.add("bg-green-100")
                    })
        }
    useEffect(() => {
        fetch("/admin/view/")
        .then(res => res.json())
        .then((data) => {
           setData(data.products)
           
            setKey(Object.keys(data.products))
            
            
        })
    },[])
    console.log(data)
    const closeModal = (e) => {
        e.preventDefault()
                   const modal = document.getElementById("modal")
                   modal.classList.add("invisible");
                   modal.classList.add("opacity-0");
                   modal.style.background = "transparent";
    }
    const openModalWithAction = (e) => {
        setAction(e.target.name)
        const modal = document.getElementById("modal")
        modal.classList.remove("invisible");
        modal.classList.remove("opacity-0");
        modal.style.background = "rgba(0,0,0,.5)";
    }
    
    return <>
        <AdminNavBar />
        {/* product modal section */}
        <section className="w-full h-screen flex justify-center invisible opacity-0 transition-all duration-500 relative -top-1/2 z-10" id="modal">
            <form className=" flex flex-col md:w-9/12 2xl:w-1/2 my-auto bg-white h-4/5 justify-evenly shadow-xl rounded-xl">
                {action === "Add" ? (
                    <>
                           <div className="flex flex-row justify-around">
                <label className="w-40 text-2xl">ProductName</label>
                <input type="text" name="productName" className="transition-all duration-500 focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" placeholder="Product Name"onChange={HandleInputChange}></input>
                </div>
                
                
                <div className="flex flex-row justify-around">
                <label className="w-40 text-2xl">ProductCatagory</label>
                <select className="transition-all duration-500 bg-white focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" name="productCatagory" onChange={HandleInputChange}>
                    <option value="" default hidden>select catagory</option>
                    {catagories.map((data,index) => {
                        return <option key={index} value={data}>{data}</option>
                    })}
                </select>
               
                </div>
               
                {subCategory !== undefined ?(
                    <>
                     <div className="flex flex-row justify-around">
                     <label className="w-40 text-2xl">SubCatagory</label>
                     <select className="transition-all duration-500 bg-white focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" name="subCategory" onChange={HandleInputChange}>
                         <option value="" default hidden>select catagory</option>
                         {subCategoryList[subCategory].map((data,index) => {
                             return <option key={index} value={data}>{data}</option>
                         })}
                     </select>
                    
                     </div>
                     </>
                ):(<></>)}
               
                <div className="flex flex-row justify-around" >

                <label className="w-40 text-2xl">ProductDescription</label>
                <textarea type="text" name="productDescription" className="transition-all duration-500 focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700 resize-none" placeholder="Product description"onChange={HandleInputChange}></textarea>
                </div>
                <div className="flex flex-row justify-around">
                <label className="w-40 text-2xl">Quantity</label>
                <input type="text" name="quantity" className="transition-all duration-500 focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" placeholder="quantity" onChange={HandleInputChange}></input>
                </div>
                <div className="flex flex-row justify-around">
                <label className="w-40 text-2xl">ProdutPrice</label>
                <input type="text" name="productPrice" className="transition-all duration-500 focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" placeholder="product price" onChange={HandleInputChange}></input>
                </div>
                <div className="flex flex-row justify-around">
                <label className="w-40 text-2xl">Offer in %</label>
                <input type="text" name="offer" className="transition-all duration-500 focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" placeholder="Offer in %" onChange={HandleInputChange}></input>
                </div>
                    <div className="flex flex-row justify-around">
                    <label className="w-40 text-2xl">ProductImage</label>
                <div className="flex flex-col">
                <input type="file" name="productImage"  onChange={uploadCloudinary} className="w-96 p-2 "></input>
                <input type="file" name="productImage" onChange={uploadCloudinary} className="w-96 p-2 "></input>
                </div>
                </div>
                <div className="text-center">
               <button className="border-transparent rounded-xl transition-all duration-500 text-2xl px-3 bg-green-600 text-white hover:bg-green-700 m-3 " onClick={(e) => {
                   e.preventDefault()
                   fetch("/admin/add/",{
                    'method':"POST",
                       headers:{
                            
                           'Content-Type':"application/json",
                           'accept':"application/json"
                       },
                       body:JSON.stringify({test:product})
                   })
                   .then(res => res.json())
                   .then((data) => {
                       console.log(data)
                       product.productImage = []
                       document.querySelector("form").reset();
                   })
               }}>Save</button>
               <button className="border-transparent rounded-xl transition-all duration-500 text-2xl px-3 bg-red-600 text-white hover:bg-red-700 m-3 " onClick={closeModal}>Cancel</button>
                </div>
                    </>
                ):(
                    <>
                <div className="flex flex-row justify-around">
                <label className="w-40 text-2xl">ProductCatagory</label>
                <select className="transition-all duration-500 bg-white focus:border-transparent focus:ring-2 focus:ring-green-700 w-96 p-2 border-b-2 border-red-700" name="productCatagory" onChange={(e) => {
                    e.preventDefault()
                    setDeleteCategory(e.target.value)
                }}>
                    <option value="" default hidden>select catagory</option>
                    {catagories.map((data,index) => {
                        return <option key={index} value={data}>{data}</option>
                    })}
                </select>
                </div>
               
                    {deleteCategory !== undefined ?(

                       <>
                        {data !== undefined && Key !== undefined ?(
                            <>
                                <table className="w-full h-1/4 table verflow-x-auto overflow-y-scroll">
                                    <tr>
                                        <th className="text-left p-4 bg-white border-b-2 border-r-2">Select</th>
                                        
                                        <th className="text-left p-4 bg-white border-b-2 border-r-2">ProductName</th>
                                        <th className="text-left p-4 bg-white border-b-2 border-r-2">ProductCategory</th>
                                    </tr>
                                    
                                   { 
                                  
                                   Key.map((productKey,index) => {
                        const {productName,productCatagory,productImage} = data[productKey];

                        if(deleteCategory === productCatagory){
                            return <tr>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">
                            <input type="checkbox" onChange={(e) => {
                                console.log(e.target.value)
                                let temp = [...deleteKey,e.target.value]
                                setDeletKey(temp)
                                
                                 
                            }} value={productKey}></input>
                            </td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productName}</td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productCatagory}</td>
      
                         
                        </tr>
                        }         
                    })}
                                </table>
                            </>

                        ):("")}
                       </>
                    ):(<h3 className="text-center text-xl">No Category Selected</h3>)}
              
            
            
              
                
                   
                <div className="text-center">
               <button className="border-transparent rounded-xl transition-all duration-500 text-2xl px-3 bg-green-600 text-white hover:bg-green-700 m-3 " onClick={(e) => {
                   e.preventDefault();
                   const product = {
                       productCategory:deleteCategory,
                       productId:deleteKey
                   }
                   console.log(product)
                   fetch("/admin/remove/",{
                       "method":"POST",
                       headers:{
                           "Content-Type":"application/json",
                           "accept":"application/json"
                       },
                       body:JSON.stringify({test:product})
                   })
                   .then(res => {return res})
                   .then((data) => {console.log(data)})
               }}>Delete</button>
               <button className="border-transparent rounded-xl transition-all duration-500 text-2xl px-3 bg-red-600 text-white hover:bg-red-700 m-3 " onClick={closeModal}>Cancel</button>
                </div>
                    </>
                )}
                 
               
            </form>
        </section> 
        
        {/* view section */}
        
        <section className="absolute top-28 z-0 w-full">
            <div className="h-12 w-full mb-5 mr-5 flex float-right justify-end rounded-2xl ">
                <button className="bg-green-600 px-5 py-3 text-white  rounded-2xl float-right shadow-xl mx-5" name="Add" onClick={openModalWithAction}>Addproduct</button>
                     <button className="transition-all duration-500 bg-red-500 px-5 text-white rounded-xl shadow-xl text-xl hover:bg-red-600 mx-5" name="Delete"
                        onClick={openModalWithAction}
                     >Delete</button>
                     
                <select className="bg-white shadow-xl border-2  px-6 py-3 rounded-2xl">
                    <option default hidden>Select range</option>
                    <option>6 per row</option>
                    <option>12 per row</option>
                    <option>18 per row</option>
                    <option>24 per row</option>
                    <option>15 per row</option>
                    <option>All per row</option>
                </select>
                <select className="bg-white shadow-xl border-2 mx-5 px-6 py-3 rounded-2xl" onChange={(e) => {
                    e.preventDefault()
                    setFilterCategory(e.target.value)
                }}>
                    <option default hidden>Select Catagory</option>
                    <option value="All">All</option>
                    {catagories.map((data,index) => {
                        return <option key={index} value={data}>{data}</option>
                    })}
                    <option value="All">ALL</option>
                </select>
            </div>
            <section className="w-11/12 m-auto rounded-2xl overflow-x-hidden overflow-y-auto" style={{"height":"45rem"}}>
            <table className="w-full shadow-xl ">
            <thead>
                {['SINO','Image','productName','Category','Description','Price'].map((header,index) => {
                    return <th className="text-left p-4 bg-white border-b-2 border-r-2">{header.toUpperCase()}</th>
                })}
              
            </thead>
            {data !== undefined && Key !== undefined ?(
                    Key.map((productKey,index) => {
                        const {productName,productDescription,productPrice,productCatagory,productImage} = data[productKey];
                        
                        if(filterCategory === productCatagory){
                            
                            return <tr>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{index}</td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2"><img src={productImage[0]} alt="" className="w-20"></img></td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productName}</td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productCatagory}</td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productDescription.slice(0,50)+"..."}</td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productPrice}</td>
                         
                        </tr>
                        }
                        else if(filterCategory === "All"){
                          return  <tr>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{index+1}</td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2"><img src={productImage[0]} alt="" className="w-20"></img></td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productName}</td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productCatagory}</td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productDescription.slice(0,50)+"..."}</td>
                            <td className="text-left p-4 bg-white border-b-2 border-r-2">{productPrice}</td>
                         
                        </tr>
                        }
                        
                       
                    })
              
            
            ):("")}
        </table>
            </section>
        </section>

    </>
}

export default ProductView;