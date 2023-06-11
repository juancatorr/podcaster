import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { Episode } from '../../utils/Episode'

interface EpisodesProps {
  episodes: Episode[];
}

export const Episodes = ({episodes} : EpisodesProps )=>{

	const {podcastId} = useParams()


	const formatTime = (time:number) => {
		const minutes = Math.floor(time / 60000)
		const seconds = ((time % 60000) / 1000).toFixed(0)
		return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`
	}


	const formatDate = (date : string) => {

		const dateObject = new Date(date)
		const day = dateObject.getDate()
		const month = dateObject.getMonth()
		const year = dateObject.getFullYear()
		return `${day}/${month}/${year}` 
	}

	return (
		<div className="grid grid-cols-8 p-5" key={`episode_${podcastId}`}>
			<div className="col-span-5">
				<div className=" p-2 font-semibold">Title</div>
			</div>
			<div className="col-span-2">
				<div className=" p-2 font-semibold">Date</div>
			</div>
			<div className="col-span-1">
				<div className=" p-2 font-semibold text-right">Duration</div>
			</div>
			<hr className="col-span-8 border-zinc-200 "/>
			{
				episodes.map((episode,index ) => {
					return(
						<>
							<div key={`col_one_${index}`} className="col-span-5">
								<Link to={`/podcast/${podcastId}/episode/${episode.id}`}>
									<div className={`p-2 text-ellipsis overflow-hidden whitespace-nowrap text-primary-300 ${index % 2 ===0?'bg-zinc-100':' white' }`}>{episode.name}</div>
								</Link>
							</div>
							<div key={`col_two_${index}`} className="col-span-2">
								<div className={`p-2 text-ellipsis overflow-hidden whitespace-nowrap ${index % 2 ===0?'bg-zinc-100':'white' }`}>{formatDate(episode.releaseDate)}</div>
							</div>
							<div key={`col_three_${index}`} className="col-span-1">
								<div className={`p-2 text-ellipsis overflow-hidden whitespace-nowrap text-right ${index % 2 ===0?'bg-zinc-100':'white' }`}>{formatTime(episode.duration)}</div>
							</div>
							<hr key={`line_${index}`} className="col-span-8 border-zinc-200"/>
						</>
					)
				}
				)
			}    
		</div>

    
	)
}