import React from "react";
import { useParams,Link } from "react-router-dom";

export const Episodes = ({episodes})=>{

  const {podcastId} = useParams()


const formatTime = (time) => {
  const minutes = Math.floor(time / 60000);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
}


const formatDate = (date) => {

  const dateObject = new Date(date)
  const day = dateObject.getDate()
  const month = dateObject.getMonth()
  const year = dateObject.getFullYear()
  return `${day}/${month}/${year}` 
}

  return (
    <div className="grid grid-cols-8 p-5">
      <div className="col-span-5">
        <div className=" p-2 font-semibold">Title</div>
      </div>
      <div className="col-span-2">
        <div className=" p-2 font-semibold">Date</div>
      </div>
      <div className="col-span-1">
        <div className=" p-2 font-semibold text-right">Duration</div>
      </div>
      <hr className="col-span-8 border-zinc-200 "/>
      
      {episodes.map((episode,index ) => {
        console.log("🚀 ~ file: index.tsx:56 ~ {episodes.map ~ episode:", episode)
        return(
        <>
        <div key={`col_one_${index}`} className="col-span-5">
          <Link to={`/podcast/${podcastId}/episode/${episode.trackId}`}>
          <div className={`p-2 text-ellipsis overflow-hidden whitespace-nowrap text-primary-300 ${index % 2 ===0?'bg-zinc-100':' white' }`}>{episode.trackName}</div>
          </Link>
        </div>
        <div key={`col_two_${index}`} className="col-span-2">
          <div className={`p-2 text-ellipsis overflow-hidden whitespace-nowrap ${index % 2 ===0?'bg-zinc-100':'white' }`}>{formatDate(episode.releaseDate)}</div>
        </div>
        <div key={`col_three_${index}`} className="col-span-1">
          <div className={`p-2 text-ellipsis overflow-hidden whitespace-nowrap text-right ${index % 2 ===0?'bg-zinc-100':'white' }`}>{formatTime(episode.trackTimeMillis)}</div>
        </div>
        <hr key={`line_${index}`} className="col-span-8 border-zinc-200"/>
      </>
    )
    })}     
    </div>
  )
}