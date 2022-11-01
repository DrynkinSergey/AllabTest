import React from 'react'
import JobSingleItem from './components/JobSingleItem'

function App() {
	return (
		<div className='flex  bg-[#E6E9F2] justify-center'>
			<div id='wrapper' className='container py-5 gap-2 flex flex-col'>
				<JobSingleItem />
				<JobSingleItem />
				<JobSingleItem />
				<JobSingleItem />
				<JobSingleItem />
				<JobSingleItem />
				<JobSingleItem />
			</div>
		</div>
	)
}

export default App
