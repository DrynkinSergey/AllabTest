import React, { useEffect, useRef, useState } from 'react'
import JobDetails from './JobDetails'
import JobSingleItem from './JobSingleItem'

export interface SingleItemI {
	id: string
	name: string
	email: string
	phone: string
	title: string
	salary: string
	address: string
	description: string
	createdAt: string
	pictures: string
	onClickItem: (id: string) => void
}

const JobList = () => {
	const [jobList, setJobList] = useState<SingleItemI[]>([])
	const [selectItem, setSelectItem] = useState<SingleItemI[] | null>(null)
	const [selectId, setSelectId] = useState('')
	const mustRefresh = useRef(true)
	const ClickHandler = (id: string) => {
		setSelectItem(jobList.filter(item => item.id === id))
	}
	useEffect(() => {
		if (mustRefresh.current === true) {
			fetch(
				'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
			)
				.then(response => response.json())
				.then(data => setJobList(data))
			mustRefresh.current = false
		} else return
	}, [])

	if (selectItem) return <JobDetails {...selectItem} clear={setSelectItem} />
	return (
		<div className='flex p-2 bg-[#E6E9F2] justify-center'>
			<div id='wrapper' className='container py-5 gap-2 flex flex-col'>
				{jobList.map((item, index) => (
					<JobSingleItem
						onClickItem={ClickHandler}
						key={item.id}
						name={item.name}
						id={item.id}
						email={item.email}
						phone={item.phone}
						title={item.title}
						salary={item.salary}
						address={item.address}
						description={item.description}
						createdAt={item.createdAt}
						pictures={`https://picsum.photos/id/${index * 5}/200/300`}
					/>
				))}
			</div>
		</div>
	)
}
export default JobList
