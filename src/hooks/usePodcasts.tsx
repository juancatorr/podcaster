import {useEffect, useState} from "react";
import { LocalStorageKeys, getValue, setValue,isPodcastInLocalStorageValid } from "../utils/localStorageHelper";





export const usePodcasts = () => {
  
  const [podcasts, setPodcasts] = useState([{}])
  const URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

  useEffect(() => {

    const fetchPodcasts = async () => {
      
      if(isPodcastInLocalStorageValid()){
        const podcastsStored = getValue(LocalStorageKeys.Podcasts)
        return podcastsStored
      }
      
      try{
        const response = await fetch(URL);
        const newPodcasts = await response.json();
        const newPodcastsParsed = newPodcasts.feed.entry

        setValue(LocalStorageKeys.Podcasts, newPodcastsParsed)
        setPodcasts(getValue(LocalStorageKeys.Podcasts))
        return(getValue(LocalStorageKeys.Podcasts))

      }catch(error){
      console.log(error)
    }
  }
  fetchPodcasts()
}, [])

return podcasts
}