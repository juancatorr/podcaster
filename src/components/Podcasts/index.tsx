import React from "react";

interface PodcastsProps {
  id?: string;
}

export const Podcasts = ({ id = '' }: PodcastsProps) => {

  
  return (<div className="text-3xl font-bold underline bg-primary-300" >{`Podcasts🥩 ${id}`}</div>)
}