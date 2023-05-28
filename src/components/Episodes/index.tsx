import React from "react";


export const Episodes = ({episodes})=>{

  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-3">
        <div className="bg-zinc-50 p-2 font-semibold">Title</div>
      </div>
      <div className="col-span-1">
        <div className="bg-zinc-50 p-2 font-semibold">Date</div>
      </div>
      <div className="col-span-1">
        <div className="bg-zinc-50 p-2 font-semibold">Duration</div>
      </div>
      <hr className="col-span-4"/>
      
      {episodes.map((episode,index ) => {
        return(
        <>
        <div key={`col_one_${index}`} className="col-span-3">
          <div className={`p-2 text-ellipsis overflow-hidden whitespace-nowrap ${index % 2 ===0?'bg-zinc-200':' bg-zinc-50' }`}>{episode.trackName}</div>
        </div>
        <div key={`col_two_${index}`} className="col-span-1">
          <div className={`p-2 text-ellipsis overflow-hidden whitespace-nowrap ${index % 2 ===0?'bg-zinc-200':'bg-zinc-50' }`}>{episode.releaseDate}</div>
        </div>
        <div key={`col_three_${index}`} className="col-span-1">
          <div className={`p-2 text-ellipsis overflow-hidden whitespace-nowrap ${index % 2 ===0?'bg-zinc-200':'bg-zinc-50' }`}>{episode.trackTimeMillis}</div>
        </div>
        <hr key={`line_${index}`} className="col-span-5"/>
      </>
    )
  })}     
    </div>
  )
}