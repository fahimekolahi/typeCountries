import { ButtonHTMLAttributes, ReactElement } from "react"


interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
  children : ReactElement | string | number
}
const CountriesBox = ({children, name, image, continent, population, status }:Iprops) => {

  return (

      <div className="flex gap-3 justify-between my-3 border border-gray-500 rounded-[2px] m-2 bg-white p-1 sm:p-3 md:p-5 lg:p-6">
          <div className="flex flex-col m-1 text-[12px] sm:text-[18px] md:text-[22px] lg:text-[25px]">
              <p>
                name :  {name}
              </p>

              <p>
                continent:  {continent}
              </p>

              <p>

                status:  {status}
              </p>

              <p>
                 population: {population}
              </p>


          </div>



          <div className="w-[50%] flex items-center m-2">
              <img src={image} alt="country" className="w-full" />
          </div>




      </div>




  )






}

export default CountriesBox






