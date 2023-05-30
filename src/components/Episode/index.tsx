
import React,{useContext} from "react";
import { PodcastContext } from "../../utils/PodcastContext";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

export const Episode = () => {
  
  const episodes = useContext(PodcastContext)
  const {episodeId} = useParams()

  const episode = episodes?.find((episode) => {
    return episode.trackId == episodeId
  })

  console.log("🚀 ~ file: index.tsx:20 ~ Episode ~ episode?.description:", episode?.description)
  return (
    <div className=" bg-zinc-50 rounded-sm p-4 shadow-md">
      <div className="text-xl font-bold text-ellipsis overflow-hidden whitespace-nowrap my-2">{episode?.trackName}</div>
      <ReactMarkdown className=" italic font-bold my-2">{episode?.description}</ReactMarkdown>
    <div>
        <audio className="w-full" controls>
          <source src={episode?.episodeUrl} type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>

  )
}