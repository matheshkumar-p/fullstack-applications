import ProductCards from "../Components/ProductCards"

const CardLoading = () => {
    return  <div className="w-11/12 h-screen mt-32 m-auto flex flex-wrap ">
    {[1,2,3,4,5,6,7,8,9].map((val,index) => {
        return <ProductCards  loading ={true}/>
    })}

    </div>
}

export default CardLoading;
