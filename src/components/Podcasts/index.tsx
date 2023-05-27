import React from "react";
import { usePodcasts } from "../../hooks/usePodcasts";

interface PodcastsProps {
  id?: string;
}

export const Podcasts = ({ id = '' }: PodcastsProps) => {

  const podcasts = usePodcasts()
  console.log("🚀 ~ file: index.tsx:11 ~ Podcasts ~ podcasts:", podcasts)

  return (<div className="text-3xl font-bold underline bg-primary-300" >{`Podcasts🥩 ${id}`}</div>)
}


