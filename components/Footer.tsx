import Link from "next/link"

const Footer = () => {
  return (
    <div className='flex justify-between items-center py-[2.2rem] px-[3rem] border-t border-black'>
        <div className="text-4xl">
            <p>This is an open source project. <Link className="text-sky-700" href="https://github.com/KorradoInganamorte/Asteroid">GitHub repositories</Link></p>
            <p>The API that I used. <Link className="text-sky-700" href="https://api.nasa.gov">NASA API</Link></p>
            <p>If you liked this project, give it an asterisk</p>
        </div>

        <img className="w-[12.5rem] h-[9.3rem]" src="/images/Rocket.svg" alt="Rocket images" />
    </div>
  )
}

export default Footer