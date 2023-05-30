import React from "react";
import { Podcast } from "../../utils/Podcast";
interface PodcastItemProps {
  podcast: Podcast;
  isShortVersion?: boolean
}

export const PodcastItem = ({podcast,isShortVersion=true}:PodcastItemProps ) => {  
  if(isShortVersion){
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
return (
  <div className="w-60 flex flex-col bg-zinc-50 shadow-md rounded-sm p-5 text-center items-center border">
  <img className="w-36 h-36 rounded-sm" src={podcast.image} alt={podcast.title}></img>  
   <hr className="w-full my-2"/>
  <div className="flex flex-col items-start text-start">
    <h1 className="text-sm font-bold" >{`${podcast.name}`}</h1>
    <p className="text-sm italic">{`by: ${podcast.author}`}</p>
    <hr className="w-full my-2"/>
    <h2 className="text-xs font-bold">Description:</h2>
    <p className="text-xs italic break-all text-justify">{podcast.summary}</p>
   </div>
</div>
);
}