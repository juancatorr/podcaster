
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { useEpisodes } from "../../hooks/useEpisodes";
import { Episode as EpisodeInterface} from "../../utils/Episode";



export const Episode = () => {

  const {episodeId,podcastId} = useParams()
  const {episodes,setEpisodePodcastId} = useEpisodes()
  const [selectedEpisode, setSelectedEpisode] = useState({} as EpisodeInterface )
  
  
  useEffect(() => {
    setEpisodePodcastId(podcastId)
    const episode = episodes.find((episode) => episode.id == episodeId) ?? {} as EpisodeInterface
    setSelectedEpisode(episode)
  }, [episodes,episodeId,podcastId,setEpisodePodcastId])
  
  
  return (
    <div className=" bg-zinc-50 rounded-sm p-4 shadow-md">
      <div className="text-xl font-bold text-ellipsis overflow-hidden whitespace-nowrap my-2">{selectedEpisode?.name}</div>
      <ReactMarkdown className=" italic font-bold my-2">{selectedEpisode?.description}</ReactMarkdown>
      <div>
        {selectedEpisode?.url && <audio className="w-full" controls>
          <source src={selectedEpisode?.url} type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>}
        
      </div>
    </div>
  )
}



