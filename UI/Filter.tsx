import { Dispatch, SetStateAction } from "react"

type Props = {
    data: string
    setData: Dispatch<SetStateAction<string>>
}

const Filter = ({ data, setData }: Props) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }

  return (
    <input className="mb-[1rem]" placeholder="Search by name..." value={data} onChange={handleInputChange} />
  )
}

export default Filter