
import React,{useContext} from "react";
import { PodcastContext } from "../../utils/PodcastContext";
import { useParams } from "react-router-dom";

export const Episode = () => {
  
  const episodes = useContext(PodcastContext)
  const {episodeId} = useParams()

  const episode = episodes?.find((episode) => {
    return episode.trackId == episodeId
  })
  console.log("🚀 ~ file: index.tsx:13 ~ Episode ~ episode:", episode)

  
  return (
    <div className=" bg-zinc-50 rounded-sm p-4 shadow-md">
      <div className="text-xl font-bold text-ellipsis overflow-hidden whitespace-nowrap my-2">{episode?.trackName}</div>
      <div className=" italic font-bold text-justify my-2" >{episode?.description}</div>
      <div className="italic font-bold my-2">This episode is sponsored by <span className=" text-primary-300">{episode?.collectionName}</span></div>
      <div>
        <audio className="w-full" controls>
          <source src={episode?.episodeUrl} type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>

  )
}