import "@/app/globals.sass"
import { montserratMedium } from "@/app/layout";
import { Diameter } from "@/types/Asteroid";
import { useEffect, useRef, useState } from "react";

type Props = {
  name: string
  diameter: Diameter
}

const Dropdown = ({ name, diameter }: Props) => {
 const container = useRef<HTMLDivElement | null>(null);
 const [dropdownState, setDropdownState] = useState({ open: false });

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
  <div className="relative">
  <div className="dropdown_btn group flex justify-between items-center" ref={container} onClick={handleDropdownClick}>
    {name}
    <img className="w-[1.8rem] h-[1rem] ml-[1.5rem] group-hover:fill-white" src="/images/Arrow.svg" alt="arrow dropdown" />
  </div>

  {dropdownState.open && (
    <div className="absolute w-[38.2rem] detail z-10">

      <div className="flex justify-between mb-[.5rem]">
        <p className="text-3xl">Kilometers:</p>
        <div className="detail_small w-[21.6rem]">
          <p className={`text-lg ${montserratMedium.className}`}>min: <span>{diameter.kilometers.estimated_diameter_min}</span></p>
          <p className={`text-lg ${montserratMedium.className}`}>max: <span>{diameter.kilometers.estimated_diameter_max}</span></p>
        </div>
      </div>

      <div className="flex justify-between mb-[.5rem]">
        <p className="text-3xl">Meters:</p>
        <div className="detail_small w-[21.6rem]">
          <p className={`text-lg ${montserratMedium.className}`}>min: <span>{diameter.meters.estimated_diameter_min}</span></p>
          <p className={`text-lg ${montserratMedium.className}`}>max: <span>{diameter.meters.estimated_diameter_max}</span></p>
        </div>
      </div>

      <div className="flex justify-between mb-[.5rem]">
        <p className="text-3xl">Miles:</p>
        <div className="detail_small w-[21.6rem]">
          <p className={`text-lg ${montserratMedium.className}`}>min: <span>{diameter.miles.estimated_diameter_min}</span></p>
          <p className={`text-lg ${montserratMedium.className}`}>max: <span>{diameter.miles.estimated_diameter_max}</span></p>
        </div>
      </div>

      <div className="flex justify-between mb-[.5rem]">
        <p className="text-3xl">Feet:</p>
        <div className="detail_small w-[21.6rem]">
          <p className={`text-lg ${montserratMedium.className}`}>min: <span>{diameter.feet.estimated_diameter_min}</span></p>
          <p className={`text-lg ${montserratMedium.className}`}>max: <span>{diameter.feet.estimated_diameter_max}</span></p>
        </div>
      </div>

    </div>
      )}
  </div>

 );
}

export default Dropdown