import "@/app/globals.sass"
import { montserratMedium } from "@/app/layout"
import Dropdown from "@/UI/Dropdown"
import { Close_Data, Diameter } from "@/types/Asteroid"

type Props = {
  data: string
  name: string
  id: string
  magnitude: number
  hazardous: boolean
  orbity: string
  diameter: Diameter
  closeData: Close_Data
}

const Card = ( { data, name, id, magnitude, hazardous, orbity, diameter, closeData }: Props ) => {

  let img_type = "/images/AsteroidBig.svg"
  let img_size = "18.7"

  if(diameter.kilometers.estimated_diameter_max > 0.01) {
    img_type = "/images/AsteroidMedium.svg"
    img_size = "14.7"
  } else if(diameter.kilometers.estimated_diameter_max > 0.1) {
    img_type = "/images/AsteroidBig.svg"
    img_size = "18.7"
  } else {
    img_type = "/images/AsteroidSmall.svg"
    img_size = "11.7"
  }

  return (
    <div className="flex shadow-detail mb-[3.5rem]">
        <div className="flex items-center justify-center w-[20.8rem] h-[20.8rem] border border-black rounded-[.5rem] mr-[1.2rem]">
            <img className={`w-[${img_size}rem] h-[${img_size}rem]`} src={img_type} alt="asteroid images" />
        </div>

        <div className="mr-[3.5rem]">
            <p className="text-3xl">Data: <span className={`${montserratMedium.className}`}>{data}</span></p>
            <p className="text-3xl">Name: <span className={`${montserratMedium.className}`}>{name}</span></p>
            <p className="text-3xl">ID: <span className={`${montserratMedium.className}`}>{id}</span></p>
            <p className="text-3xl">Absolute Magnitude H: <span className={`${montserratMedium.className}`}>{magnitude}</span></p>
            <p className="text-3xl">Hazardous Asteroid: <span className={`${montserratMedium.className}`}>{`${hazardous}`}</span></p>
            <p className="text-3xl">Orbiting Body: <span className={`${montserratMedium.className}`}>{orbity}</span></p>
        </div>

        <div>
          <p className="text-3xl">Close Approach Data: <span className={`${montserratMedium.className}`}>{closeData.close_approach_date}</span></p>
          <p className="text-3xl mb-[2rem]">Miss Distance: <span className={`${montserratMedium.className}`}>{`${closeData.miss_distance.kilometers}km`}</span></p>
          <Dropdown name="Estimated Diameter" diameter={diameter}></Dropdown>
        </div>
    </div>
  )
}

export default Card