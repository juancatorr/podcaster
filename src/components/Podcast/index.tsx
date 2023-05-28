import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { usePodcasts} from "../../hooks/usePodcasts";
import { Podcast as PodcastInterface} from "../../utils/Podcast";
import { PodcastItem } from "../PodcastItem";
import { Header } from "../Header";
import { Episodes } from "../Episodes";

export const Podcast = () => {

  const podcasts: PodcastInterface[] = usePodcasts()
  const {podcastId} = useParams()
  const [episodes, setEpisodes] = useState()
  const [selectedPodcast, setSelectedPodcast] = useState({} as PodcastInterface)
  
  useEffect(() => {
  const podcast: PodcastInterface = podcasts.find((podcast) => podcast.id === podcastId) as PodcastInterface
setSelectedPodcast(podcast)
    const getEpisodes = async (podcastId: string) => {
      const URL_DETAILS = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
      try{
        const response = await fetch(URL_DETAILS);
        const episodes = await response.json();
        
        setEpisodes(episodes)
      }catch(error){
        console.log(error)
      }
    }
    getEpisodes(podcastId as string)
  }, [podcastId,podcasts])
  

  return (
  <div className="font-chakra">
    <Header/>
    <div className="flex flex-row w-full justify-center mt-10 ">
      <div className=" w-2/12 flex}">
        {selectedPodcast&&<PodcastItem podcast={selectedPodcast} isShortVersion={false}/>}
      </div>
      <div className="w-5/12 flex justify-start flex-col">
        <div className='flex flex-col justify-center pl-2 items-start w-full text-lg font-bold border shadow-md h-9 bg-zinc-50 rounded-sm mb-4'>
          {`Episodes: ${episodes?.resultCount}`}
        </div>
        <div className="shadow-md">
          {episodes && <Episodes episodes={episodes.results}/>}
        </div>
      </div>
    </div>
  </div>
  )
}
