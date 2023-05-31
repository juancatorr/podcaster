import { useEffect, useState } from "react";
import {
  LocalStorageKeys,
  getValue,
  setValue,
  isDataInLocalStorageValid,
} from "../utils/localStorageHelper";
import { Podcast, parsePodcasts } from "../utils/Podcast";

export const usePodcasts = (): Podcast[] => {
  const [podcasts, setPodcasts] = useState([] as Podcast[]);
  useEffect(() => {
    const URL_PODCAST =
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
    const URL = `https://api.allorigins.win/get?url=${encodeURIComponent(
      URL_PODCAST
    )}`;
    const fetchPodcasts = async () => {
      if (isDataInLocalStorageValid(LocalStorageKeys.Podcasts)) {
        const podcastsStored = getValue(LocalStorageKeys.Podcasts);
        setPodcasts(podcastsStored as Podcast[]);
      } else {
        try {
          const response = await fetch(URL);
          const newPodcasts = await response.json();
          const newPodcastsParsed = JSON.parse(newPodcasts.contents).feed.entry;

          setValue(LocalStorageKeys.Podcasts, parsePodcasts(newPodcastsParsed));
          setPodcasts(getValue(LocalStorageKeys.Podcasts) as Podcast[]);
          return getValue(LocalStorageKeys.Podcasts);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchPodcasts();
  }, []);
  return podcasts;
};
