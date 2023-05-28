export interface Podcast {
  id: string;
  name: string;
  // description: string;
  // // episodes: Episode[];
  author: string;
  title: string;
  summary: string;
  image: string;

}


export const parsePodcasts = (podcasts) : Podcast[] => {
 
  const newPodcasts = podcasts.map((podcast) => {
    
    // console.log("🚀 ~ file: Podcast.ts:29 ~ newPodcasts ~ podcast:", podcast)

    const newPodcast = {
      id: podcast.id.attributes['im:id'],
      name: podcast['im:name'].label.toUpperCase(),
      author: podcast['im:artist'].label,
      title: podcast.title.label,
      summary: podcast.summary.label,
      image: podcast['im:image'][2].label,

    }
    // console.log("🚀 ~ file: Podcast.ts:24 ~ newPodcasts ~ newPodcast:", newPodcast)
    
    return newPodcast
  })


  return newPodcasts
}

