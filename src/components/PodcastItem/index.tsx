import React from "react";
import { Podcast } from "../../utils/Podcast";
interface PodcastItemProps {
  podcast: Podcast;
}

export const PodcastItem = ({podcast}:PodcastItemProps ) => {  
  return (
    <div className=" relative w-60 h-60 flex flex-col justify-end">
      <img className=" absolute right-1/2 translate-x-1/2 rounded-full top-1/3 -translate-y-1/2 w-36 h-36" src={podcast.image} alt={podcast.title}></img>
      <div className=" flex flex-col justify-end items-center border bg-zinc-50 shadow-md h-2/3 rounded-md p-5 text-center" >
        <h1 className=" text-sm font-bold" >{`${podcast.name}`}</h1>
        <h2 className=" text-sm text-gray-500">{`Author: ${podcast.author}`}</h2> 
      </div>
    </div>
  );
}