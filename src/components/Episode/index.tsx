import React from "react";

interface EpisodeProps {
  id?: string;
}

export const Episode = ({ id = '' }: EpisodeProps) => {
  return (
    <div>Episode😀</div>
  )
}