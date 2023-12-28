import { montserratMedium } from "@/public/fonts/font"
import Link from "next/link"

const Header = () => {
  return (
    <div className='flex justify-between items-end px-[3rem] py-[1.2rem] border-b border-black'>
        
        <div className="flex items-end">
            <img className={`w-[11.4rem] h-[10rem] mr-[1.5rem]`} src="/images/Logo.svg" alt="logo images" />
            <div>
                <h1 className={`${montserratMedium.className} text-5xl max-h-[3.9rem]`}>Asteroid</h1>
                <h2 className="text-3xl max-h-[2.9rem]">by Korrado Inganamorte</h2>
            </div>
        </div>

        <div className="flex flex-col text-3xl items-end">
            <p className="max-h-[2.9rem]">together with</p>
            <Link className="text-sky-700" href="https://api.nasa.gov">NASA API</Link>
        </div>

    </div>
  )
}

export default Header