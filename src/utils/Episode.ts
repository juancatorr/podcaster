export interface Episode {
  id: string;
  name: string;
  description: string;
  url: string;
  releaseDate: string;
  duration: number;
}

export const parseEpisodes = (episodes): Episode[] => {
  const parsedEpisodes = episodes.map((episode) => {
    const newEpisode = {
      id: episode.trackId,
      name: episode.trackName,
      description: episode.description,
      url: episode.episodeUrl,
      releaseDate: episode.releaseDate,
      duration: episode.trackTimeMillis,
    };
    return newEpisode;
  });
  return parsedEpisodes;
};
