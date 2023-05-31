export interface Podcast {
  id: string;
  name: string;
  author: string;
  title: string;
  summary: string;
  image: string;
}

export const parsePodcasts = (podcasts): Podcast[] => {
  const newPodcasts = podcasts.map((podcast) => {
    const newPodcast = {
      id: podcast.id.attributes["im:id"],
      name: podcast["im:name"].label.toUpperCase(),
      author: podcast["im:artist"].label,
      title: podcast.title.label,
      summary: podcast.summary.label,
      image: podcast["im:image"][2].label,
    };

    return newPodcast;
  });

  return newPodcasts;
};
