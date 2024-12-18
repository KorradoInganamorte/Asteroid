import "@/app/globals.sass"
import { montserratMedium } from "@/public/fonts/font"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"

type Props = {
    element_count: number | undefined
    isSuccess: boolean
    data: string
    setData: Dispatch<SetStateAction<string>>
    setMeteorits: Dispatch<SetStateAction<number>>
}

const Detail = ({ element_count, isSuccess, data, setData, setMeteorits }: Props) => {

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
    setMeteorits(5)
  }

  return (
    <div className='flex mb-[2.5rem]'>

    <div className='shadow-detail mr-[3rem]'>
      <div className='flex flex-col mb-[7.4rem]'>
        <div className='mb-[.5rem]'>
          <input placeholder='Data start...[YY-MM-DD]' value={data} onChange={handleInputChange} />
        </div>
        <div className={`decoration-div ${montserratMedium.className}`}>Enter the data in the format: YY-MM-DD</div>
      </div>
    </div>

    <div className='flex flex-col mr-[2.5rem]'>

      <div className="shadow-detail_small mb-[1rem]">
        <p className='text-3xl'>Asteroid Count: <span className={`${montserratMedium.className}`}>{isSuccess && element_count}</span></p>
      </div>

      <div className='flex shadow-detail'>
        <Link className='mr-[1rem] mb-[7.5rem]' href="https://github.com/KorradoInganamorte"><img src="/images/github.svg" alt="github icon" /></Link>
        <Link href="https://t.me/PS_Istomin"><img src="/images/telegram.svg" alt="telegam icon" /></Link>
      </div>

    </div>

  </div>
  )
}

export default Detail
