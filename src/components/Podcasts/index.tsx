import React, {useEffect, useState} from "react";
import { usePodcasts } from "../../hooks/usePodcasts";
import { PodcastItem } from "../PodcastItem";
import { Podcast } from "../../utils/Podcast";
import { Header } from "../Header";
import { Link } from "react-router-dom";



export const Podcasts = () => {

  const podcasts: Podcast[] = usePodcasts()
  const [podcastsFiltered, setPodcastsFiltered] = useState([] as Podcast[]) 

  useEffect(() => {
      setPodcastsFiltered(podcasts)
    }, [podcasts])
    
    const filterPodcasts = (target: EventTarget | null) => {
      
      const input = target as HTMLInputElement
      const podcastsFiltered = podcasts.filter((podcast) => podcast.title.toLowerCase().includes(input.value.toLowerCase()) || podcast.author.toLowerCase().includes(input.value.toLowerCase()) )
      setPodcastsFiltered(podcastsFiltered)
    }
    
 
  return (
    <div className="flex flex-col items-center w-full gap-4 font-chakra">
        <Header isHidden={podcasts.length>0}/>
        <div className=" flex flex-row items-center justify-end w-7/12" >
          <div className="bg-primary-300 rounded-lg text-white px-1 font-medium h-6 mr-4">
            {podcastsFiltered.length}
          </div>
          <input onInput={(e)=>filterPodcasts(e.target)} className=" w-80 h-8 shadow-md rounded-sm border my-2 pl-2" placeholder="Filter podcasts..."></input>
          <div>
            
          </div>
          </div>
        <div className="flex flex-row">
          <div className="grid gap-x-9 gap-y-16 grid-cols-2 sm:grid-cols-4 ">
            {
            podcastsFiltered && podcastsFiltered.map((podcast )=>
            <Link key={`link_${podcast.id}`} className=" cursor-pointer" to={`/podcast/${podcast.id}`}>
              <PodcastItem key={`podCast_${podcast.id}`}  podcast={podcast}/>
              </Link>
            )}
          </div>
          </div>
    </div>
  )
}


