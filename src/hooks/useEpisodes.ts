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
          const URL = `https://api.allorigins.win/get?url=${encodeURIComponent(
            URL_DETAILS
          )}`;

          const response = await fetch(URL);
          const episodes = await response.json();

          setValue(
            podcastId,
            parseEpisodes(JSON.parse(episodes.contents).results)
          );
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
