import React from 'react'
import logo from '../assets/img.png'
import location from '../assets/Location.png'
import stars from '../assets/stars.png'
import bookmark from '../assets/Bookmark.png'
type Props = {}

const JobSingleItem = (props: Props) => {
	return (
		<section className='shadow-md bg-white rounded-md px-3 py-4 flex'>
			<div className=' min-w-[85px] h-[85px] mr-4'>
				<img src={logo} alt='jobImg' className='rounded-full' />
			</div>
			<div className='w-[65%]'>
				<div className='text-[#3A4562] bold text-xl mb-2 '>
					Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
					Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
					Fachärztin für Arbeitsmedizin (m/w/d)
				</div>
				<div className='text-[#878D9D] text-md mb-4'>
					Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
				</div>
				<div className='text-[#878D9D] flex'>
					<img src={location} alt='' className='w-[13px] h-[18px] mr-4' />
					Vienna, Austria
				</div>
			</div>
			<div id='rating' className='flex items-center w-1/4 justify-end'>
				<img src={stars} alt='' />
			</div>
			<div className='flex justify-end items-end w-1/4 relative'>
				<img src={bookmark} alt='' className='absolute top-0' />
				<div id='postedTime' className='text-[#878D9D]'>
					Posted 2 days ago
				</div>
			</div>
		</section>
	)
}
export default JobSingleItem
