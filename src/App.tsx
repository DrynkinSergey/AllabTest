import React, { useEffect, useState } from 'react'
import JobSingleItem from './components/JobSingleItem'

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
}

const App: React.FC = () => {
	const [jobList, setJobList] = useState<SingleItemI[]>([])
	useEffect(() => {
		fetch(
			'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
		)
			.then(response => response.json())
			.then(data => setJobList(data))
	}, [])
	return (
		<div className='flex p-2 bg-[#E6E9F2] justify-center'>
			<div id='wrapper' className='container py-5 gap-2 flex flex-col'>
				{jobList.map(item => (
					<JobSingleItem
						name={item.name}
						id={item.id}
						email={item.email}
						phone={item.phone}
						title={item.title}
						salary={item.salary}
						address={item.address}
						description={item.description}
						createdAt={item.createdAt}
						pictures={`https://picsum.photos/id/${Math.floor(
							Math.random() * 100
						)}/200/300`}
					/>
				))}
			</div>
		</div>
	)
}

export default App
