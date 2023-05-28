import React from "react";
import { Link } from "react-router-dom";


export const Header = () => {

  return (
    <div className={`flex flex-col items-center w-full gap-4 font-chakra`}>
        <div className={` flex items-center pl-2 text-xl font-bold w-7/12 h-8 mt-10 shadow-md text-primary-300 bg-zinc-50 `}>
          {<Link to={'/'}>
          <p>Podcaster</p>
          </Link>}
        </div>
    </div>
  )
}
