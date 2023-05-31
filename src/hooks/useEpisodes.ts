import { useEffect, useState } from "react";
import {
  isDataInLocalStorageValid,
  getValue,
  setValue,
} from "../utils/localStorageHelper";
import { Episode, parseEpisodes } from "../utils/Episode";
export const useEpisodes = () => {
  const [podcastId, setPodcastId] = useState("");
  const [episodes, setEpisodes] = useState([] as Episode[]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      if (isDataInLocalStorageValid(podcastId)) {
        const episodesStored = getValue(podcastId);
        setEpisodes(episodesStored);
      } else {
        try {
          const URL_DETAILS = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
          const response = await fetch(URL_DETAILS);
          const episodes = await response.json();
          console.log(
            "🚀 ~ file: useEpisodes.ts:22 ~ fetchEpisodes ~ episodes:",
            episodes
          );

          setValue(podcastId, parseEpisodes(episodes.results));
          setEpisodes(getValue(podcastId) as Episode[]);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchEpisodes();
  }, [podcastId]);

  const setEpisodePodcastId = (podcastId = "") => {
    setPodcastId(podcastId);
  };
  return { episodes, setEpisodePodcastId };
};
