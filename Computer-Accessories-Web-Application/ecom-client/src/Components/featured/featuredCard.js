import { Link } from "react-router-dom"
import "./style.css"
const FeaturedCard = ({image}) => {
    const cardClr = ["bg-indigo-500","bg-red-500","bg-green-500","bg-gray-500","bg-yellow-500","bg-blue-500"]
    return <>
      <div className="flex w-full mt-10 flex-wrap justify-center">
        {image.map((img,index) => {
            return <>
                {/* <div className={`w-96 flex  ${cardClr[index]} rounded-xl shadow-2xl h-36 m-2 card`}>
                    <div className="cover w-full h-full flex transition-all duration-500">
                    <div className="w-1/2 flex items-center justify-center ">
                        <Link to="" className="text-xl font-heading break-all p-2 text-white">{img}</Link>
                    </div>
                    <div className="w-1/2 flex items-center">
                        <img src={`./images/${img}.png`} className="w-inherit h-3/4 "></img>
                    </div>
                    </div>
                </div> */}
                <div class="flip-card m-2">
  <div class="flip-card-inner">
    <div class="flip-card-front flex items-center shadow-xl">
      <img src={`./images/${img}.png`} alt="Avatar" />
    </div>
    <div class="flip-card-back flex justify-center items-center shadow-xl">
      <Link to=""  className="text-xl font-para break-all">{img}</Link>
    </div>
  </div>
</div>

            </>
        })}
      </div>
    </>
}

export default FeaturedCard;