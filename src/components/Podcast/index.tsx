import React from "react";
import { Outlet } from "react-router-dom";


interface PodcastProps {
  id?: string;
}

export const Podcast = ({ id = '' }: PodcastProps) => {

  return (
  <div>
    <div>Podcast🥲</div>
    <div><Outlet/></div>
    </div>
    )
}
