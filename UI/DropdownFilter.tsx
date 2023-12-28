import { montserratMedium } from "@/public/fonts/font"
import { useEffect, useState, useRef } from "react";

const DropdwonFilter = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [dropdownState, setDropdownState] = useState({ open: false });

  const lists = ["default", "largest", "smallest"]

  const [filter, setFIlter] = useState<number>(0)
  const filterName = lists[filter]
 
  const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });
 
  const handleClickOutside = (e: MouseEvent) => {
   if (container.current && !container.current.contains(e.target as Node)) {
   setDropdownState({ open: false });
  }
  };
 
  useEffect(() => {
   document.addEventListener("mousedown", handleClickOutside);
   return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    // <FilterContext.Provider value={""}>
    <div className="relative">
      <div className="dropdown_btn group flex justify-between items-center" ref={container} onClick={handleDropdownClick}>
        <p className="text-3xl">Diameter: <span className={`${montserratMedium.className}`}>{filterName}</span></p>
        <img className="w-[1.2rem] h-[2.2rem] ml-[1.5rem] group-hover:fill-white" src="/images/Arrows.svg" alt="arrow dropdown" />
      </div>

      {dropdownState.open && (
        <ul className="absolute inline-block py-[.25rem] rounded-[1rem] z-10">
          {lists.map((list, i) => (
            <li key={i} onClick={() => console.log(i)} className={filter === i ? "decoration-div_small-active" : "decoration-div_small"}>{list}</li>
          ))}
        </ul>
      )}
    </div>
    // {</FilterContext.Provider>}
  )
}

export default DropdwonFilter