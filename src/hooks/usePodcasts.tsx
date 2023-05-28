import {useEffect, useState} from "react";
import { LocalStorageKeys, getValue, setValue,isPodcastInLocalStorageValid } from "../utils/localStorageHelper";
import {Podcast, parsePodcasts} from '../utils/Podcast'




export const usePodcasts = () : Podcast[] => {
  
  const [podcasts, setPodcasts] = useState([] as Podcast[])
  const URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

  useEffect(() => {

    const fetchPodcasts = async () => {
      
      if(isPodcastInLocalStorageValid()){
        const podcastsStored = getValue(LocalStorageKeys.Podcasts)
        setPodcasts(podcastsStored as Podcast[]) 
      }
      
      try{
        const response = await fetch(URL);
        const newPodcasts = await response.json();
        const newPodcastsParsed = newPodcasts.feed.entry

        setValue(LocalStorageKeys.Podcasts, parsePodcasts(newPodcastsParsed))
        setPodcasts(getValue(LocalStorageKeys.Podcasts) as Podcast[])
        return(getValue(LocalStorageKeys.Podcasts))

      }catch(error){
      console.log(error)
    }
  }
  fetchPodcasts()
}, [])

return podcasts
}


