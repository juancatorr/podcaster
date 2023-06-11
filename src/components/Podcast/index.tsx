import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { usePodcasts} from '../../hooks/usePodcasts'
import { useEpisodes } from '../../hooks/useEpisodes'
import { Podcast as PodcastInterface} from '../../utils/Podcast'
import { PodcastItem } from '../PodcastItem'
import { Header } from '../Header'
import { Episodes } from '../Episodes'

export const Podcast = () => {

	const podcasts: PodcastInterface[] = usePodcasts()
	const {podcastId, episodeId} = useParams()
	const [selectedPodcast, setSelectedPodcast] = useState({} as PodcastInterface)
	const {episodes,setEpisodePodcastId} = useEpisodes()
  
	useEffect(() => {
		const podcast: PodcastInterface = podcasts.find((podcast) => podcast.id === podcastId) as PodcastInterface
		setSelectedPodcast(podcast)
		setEpisodePodcastId(podcastId)
	}, [podcastId,selectedPodcast,podcasts, setEpisodePodcastId])

	return (
		<div className="font-chakra">
			<Header isHidden={episodes.length>0}/>
			<div className="flex flex-row w-full justify-center mt-10 ">
				<div className=" w-2/12 flex}">
					{selectedPodcast&&<PodcastItem podcast={selectedPodcast} isShortVersion={false}/>}
				</div>
				<div className="w-5/12 flex justify-start flex-col">
					{episodeId? <Outlet/>:<>
						<div className='flex flex-col justify-center pl-2 items-start w-full text-lg font-bold border shadow-md h-9 bg-zinc-50 rounded-sm mb-4'>
							{`Episodes: ${episodes.length}`}
						</div>
						<div className="shadow-md">
							{episodes && <Episodes episodes={episodes}/>}
						</div>
					</>
					}
				</div>
			</div>
		</div>
	)
}
