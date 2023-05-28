import React from "react";
import { usePodcasts } from "../../hooks/usePodcasts";
import { PodcastItem } from "../PodcastItem";
import { Podcast } from "../../utils/Podcast";



export const Podcasts = () => {

  const podcasts: Podcast[] = usePodcasts()

  return (
    <div className=" flex flex-col items-center w-full gap-4 font-chakra">
        <div className="bg-primary-100 text-2xl font-bold w-full">Podcasts</div>
        <div className="bg-primary-200 w-full" >filters</div>
        <div className="flex flex-row">
          <div className="grid gap-x-5 gap-y-16 grid-cols-2 sm:grid-cols-4 ">
            {
            podcasts && podcasts.map((podcast )=>
            <PodcastItem key={`podCast_${podcast.id}`}  podcast={podcast}/>
            )}
          </div>
          </div>
    </div>
  )
}


