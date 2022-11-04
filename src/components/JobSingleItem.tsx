import React from 'react'
import location from '../assets/Location.png'
import stars from '../assets/stars.png'
import bookmark from '../assets/Bookmark.png'
import { SingleItemI } from './JobList'

const JobSingleItem = ({
	email,
	name,
	phone,
	title,
	salary,
	address,
	description,
	pictures,
	createdAt,
}: SingleItemI) => {
	return (
		<section className='shadow-md relative bg-white rounded-md px-3 py-4 flex'>
			<div className=' max-w-[85px] max-h-[85px] mr-4 overflow-hidden rounded-full'>
				<img src={pictures} alt='jobImg' className='' />
			</div>

			<div className='w-[65%]'>
				<div className='text-[#3A4562] bold text-xl mb-2 hover:cursor-pointer'>
					{title}
				</div>
				<div className='text-[#878D9D] text-md mb-4'>
					Department name • {name}
				</div>
				<div className='text-[#878D9D] flex'>
					<img src={location} alt='' className='w-[13px] h-[18px] mr-4' />
					{address}
				</div>
			</div>
			<div id='rating' className='flex items-center w-1/4 justify-end'>
				<img src={stars} alt='' />
			</div>
			<div className='flex justify-end items-end w-1/4 relative'>
				<img src={bookmark} alt='' className='absolute top-0 hidden md:block' />
				<div id='postedTime' className='text-[#878D9D]'>
					Posted {createdAt.slice(0, 10)}
				</div>
			</div>
		</section>
	)
}
export default JobSingleItem
