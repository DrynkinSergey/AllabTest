import React from 'react'
import img1 from '../assets/Img1.png'
import img2 from '../assets/Img2.png'
import map from '../assets/contactMap.png'
import location from '../assets/Location.png'
type Props = {}

const JobDetails = (props: Props) => {
	return (
		<section className='p-5'>
			<h1 className='text-[#3A4562] text-3xl pb-2 mb-4 border-b font-bold'>
				Job Details
			</h1>
			<div className='flex text-[16px] mb-6'>
				<span className='mr-9 flex'>
					<svg
						className='mr-2'
						width='21'
						height='20'
						viewBox='0 0 21 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M12.9975 6.5607L13.2235 7.13915L13.8422 7.193L13.9289 6.19677L13.8422 7.193L13.8423 7.19301L13.8426 7.19303L13.8437 7.19313L13.8484 7.19354L13.8672 7.19519L13.9408 7.20167L14.218 7.22636C14.4554 7.24767 14.7908 7.27817 15.1826 7.31487C15.9672 7.38837 16.9742 7.48641 17.8719 7.58525L17.8721 7.58527C17.9166 7.59017 17.962 7.59511 18.0081 7.60013C18.4823 7.6518 19.0293 7.71139 19.4869 7.80862C19.4942 7.81017 19.5014 7.81172 19.5085 7.81327C18.9875 8.47404 18.1217 9.45889 17.3475 10.3191C16.9389 10.773 16.5632 11.1843 16.2895 11.4821C16.1527 11.631 16.0415 11.7513 15.9647 11.8343L15.8763 11.9297L15.8534 11.9543L15.8477 11.9605L15.8463 11.962L15.846 11.9623L15.8459 11.9624L16.5779 12.6437L15.8459 11.9624L15.5351 12.2963L15.5836 12.7499L15.5836 12.7499L15.5836 12.7501L15.5837 12.7508L15.584 12.7537L15.5853 12.7655L15.5902 12.8124L15.609 12.9925C15.6252 13.1484 15.6482 13.3726 15.6754 13.6451C15.7298 14.1901 15.8009 14.927 15.8678 15.6961L12.9975 6.5607ZM12.9975 6.5607L12.9975 6.56063L12.9973 6.56007L12.9962 6.55728L12.9914 6.54518L12.9719 6.49582C12.9546 6.45213 12.9288 6.38737 12.8954 6.30457C12.8285 6.13892 12.7315 5.90137 12.6115 5.61597C12.371 5.04388 12.0409 4.28549 11.6787 3.53084C11.3131 2.76881 10.9298 2.04221 10.5848 1.51806C10.5213 1.42159 10.4623 1.33699 10.4081 1.26367C10.2149 1.52377 9.99065 1.88238 9.74909 2.31272C9.19783 3.2948 8.63337 4.51029 8.23735 5.40591C8.08227 5.75663 7.95485 6.05412 7.86641 6.26344C7.82221 6.36805 7.78779 6.45051 7.76458 6.50645L7.73836 6.56988L7.73189 6.58562L7.73037 6.58931L7.73005 6.5901L7.73003 6.59016L7.73002 6.59019L7.73001 6.59021L7.73001 6.59022L7.49935 7.15491L6.89165 7.2082L6.89164 7.2082L6.89162 7.2082L6.89144 7.20822L6.89056 7.2083L6.8868 7.20863L6.8714 7.20999L6.81028 7.21547C6.75652 7.22031 6.67732 7.22752 6.57634 7.23689C6.37434 7.25565 6.08532 7.28309 5.73829 7.3177C5.04348 7.387 4.11945 7.48475 3.19705 7.59894L3.19672 7.59898C2.37006 7.70104 1.74602 7.79401 1.30164 7.8948C1.32948 7.92967 1.35927 7.96624 1.39108 8.00455C1.68896 8.36329 2.06038 8.75454 2.46221 9.17782C2.64438 9.36972 2.8328 9.5682 3.02344 9.77321L12.9975 6.5607ZM4.27041 12.6688L5.03061 12.0191L5.03055 12.019L5.03037 12.0188L5.02975 12.0181L5.02751 12.0155L5.01914 12.0057L4.98726 11.9685C4.95946 11.9362 4.91882 11.8891 4.86683 11.829C4.76287 11.709 4.61342 11.5373 4.43047 11.3296C4.065 10.9148 3.56395 10.3541 3.02364 9.77342L4.27041 12.6688ZM4.27041 12.6688L5.26653 12.7567L5.30347 12.3384L5.03065 12.0191L4.27041 12.6688ZM4.27041 12.6688L5.26653 12.7567M4.27041 12.6688L5.26653 12.7567M10.8443 15.9715L10.4302 16.8817L10.8443 15.9715L10.8444 15.9715L10.8447 15.9716L10.8458 15.9721L10.8499 15.974L10.8661 15.9814L10.9288 16.01L11.1641 16.1176C11.3658 16.2099 11.6521 16.3414 11.9904 16.4977C12.6663 16.81 13.5522 17.2228 14.3882 17.6226C14.3884 17.6227 14.3887 17.6228 14.3889 17.6229L13.9574 18.525C14.2266 18.6535 14.4872 18.7846 14.7348 18.9091L10.8443 15.9715ZM10.8443 15.9715L10.4004 15.7695M10.8443 15.9715L10.4004 15.7695M10.4004 15.7695L9.96804 15.9949M10.4004 15.7695L9.96804 15.9949M9.96804 15.9949L9.96802 15.9949M9.96804 15.9949L9.96802 15.9949M9.96802 15.9949L9.96801 15.9949M9.96802 15.9949L9.96801 15.9949M9.96801 15.9949L9.96795 15.995M9.96801 15.9949L9.96795 15.995M9.96795 15.995L9.96765 15.9951L9.96558 15.9962L9.95621 16.0011L9.91722 16.0212C9.88247 16.039 9.83055 16.0656 9.76343 16.0996C9.62914 16.1675 9.43421 16.265 9.19423 16.3819C8.71343 16.6161 8.05584 16.9261 7.345 17.2313C6.92363 17.4121 6.50821 17.6191 6.12898 17.8113C6.06083 17.8459 5.99419 17.8798 5.92893 17.913C5.62075 18.0697 5.34342 18.2108 5.08365 18.331C4.95501 18.3905 4.841 18.4399 4.7404 18.4799C4.74311 18.4025 4.74728 18.3179 4.75301 18.226C4.77971 17.7976 4.83072 17.3248 4.88565 16.8157C4.9205 16.4926 4.95694 16.1549 4.98975 15.8046L4.9898 15.804M9.96795 15.995L4.9898 15.804M4.9898 15.804C5.06393 15.0077 5.13311 14.246 5.18374 13.6835M4.9898 15.804L5.18374 13.6835M5.18374 13.6835C5.20906 13.4022 5.22975 13.1706 5.24411 13.0093M5.18374 13.6835L5.24411 13.0093M5.24411 13.0093L5.2607 12.8226M5.24411 13.0093L5.2607 12.8226M5.2607 12.8226L5.26504 12.7736M5.2607 12.8226L5.26504 12.7736M5.26504 12.7736L5.26615 12.761M5.26504 12.7736L5.26615 12.761M5.26615 12.761L5.26643 12.7578M5.26615 12.761L5.26643 12.7578M5.26643 12.7578L5.26651 12.757M5.26643 12.7578L5.26651 12.757M5.26651 12.757L5.26652 12.7568M5.26651 12.757L5.26652 12.7568M5.26652 12.7568L5.26653 12.7567M5.26652 12.7568L5.26653 12.7567M20.0351 7.98136C20.0341 7.98159 20.025 7.97683 20.0106 7.96641C20.0289 7.97592 20.0361 7.98113 20.0351 7.98136ZM0.973895 7.39786C0.974988 7.39842 0.979838 7.4092 0.98517 7.42854C0.975469 7.40697 0.972803 7.3973 0.973895 7.39786ZM0.764883 8.06198C0.759743 8.06552 0.756788 8.06717 0.756595 8.0671C0.756401 8.06704 0.758976 8.06527 0.764883 8.06198ZM10.7139 0.919588C10.7139 0.919891 10.7102 0.922693 10.7032 0.927089C10.7104 0.921483 10.714 0.919286 10.7139 0.919588ZM10.1198 0.933165C10.1077 0.92589 10.1015 0.920821 10.1014 0.920105C10.1013 0.919389 10.1074 0.923027 10.1198 0.933165ZM16.53 18.6066C16.5302 18.6069 16.5265 18.6067 16.5185 18.6053C16.5259 18.6058 16.5299 18.6064 16.53 18.6066ZM16.0498 17.6344C16.077 17.9482 16.0985 18.2335 16.1096 18.4622L15.8679 15.6967C15.8679 15.6965 15.8678 15.6964 15.8678 15.6962C15.8884 15.9339 15.9168 16.2265 15.9466 16.5333L15.954 16.6094C15.9868 16.9468 16.021 17.3011 16.0498 17.6344ZM4.27579 18.6149C4.27589 18.6148 4.27861 18.6146 4.28364 18.6149C4.2782 18.6152 4.27569 18.6151 4.27579 18.6149Z'
							stroke='#3A4562'
							stroke-width='2'
						/>
					</svg>
					Save to my list
				</span>
				<span className='flex'>
					<svg
						className='mr-2'
						width='19'
						height='20'
						viewBox='0 0 19 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M13.54 14.9096L6.41 10.743C6.46 10.512 6.5 10.2811 6.5 10.0402C6.5 9.7992 6.46 9.56827 6.41 9.33735L13.46 5.21084C14 5.71285 14.71 6.0241 15.5 6.0241C17.16 6.0241 18.5 4.67871 18.5 3.01205C18.5 1.34538 17.16 0 15.5 0C13.84 0 12.5 1.34538 12.5 3.01205C12.5 3.25301 12.54 3.48394 12.59 3.71486L5.54 7.84137C5 7.33936 4.29 7.02811 3.5 7.02811C1.84 7.02811 0.5 8.37349 0.5 10.0402C0.5 11.7068 1.84 13.0522 3.5 13.0522C4.29 13.0522 5 12.741 5.54 12.239L12.66 16.4157C12.61 16.6265 12.58 16.8474 12.58 17.0683C12.58 18.6847 13.89 20 15.5 20C17.11 20 18.42 18.6847 18.42 17.0683C18.42 15.4518 17.11 14.1365 15.5 14.1365C14.74 14.1365 14.06 14.4378 13.54 14.9096Z'
							fill='#70778B'
						/>
					</svg>
					Share
				</span>
			</div>
			<h2 className='text-[#3A4562] text-2xl font-bold'>
				Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
				Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
				Fachärztin für Arbeitsmedizin (m/w/d)
			</h2>
			<div className='flex py-2 justify-between items-center'>
				<span className='text-gray-300'>Posted 2 days ago</span>
				<div className='flex flex-col'>
					<span className='text-[#38415D] text-lg text-right'>
						Brutto, per year
					</span>
					<span className='font-bold text-xl text-[#3A4562]'>
						€ 54 000—60 000
					</span>
				</div>
			</div>
			<div className='text-[#38415DD1] text-lg'>
				<p className=' mb-8'>
					At WellStar, we all share common goals. That’s what makes us so
					successful – and such an integral part of our communities. We want the
					same things, for our organization, for our patients, and for our
					colleagues. As the most integrated healthcare provider in Georgia,
					this means we pride ourselves on investing in the communities that we
					serve. We continue to provide innovative care models, focused on
					improving quality and access to healthcare.
				</p>
				<h3 className='text-[#3A4562] font-bold text-xl mb-2'>
					Responsopilities
				</h3>
				<p className='mb-6'>
					Wellstar Medical Group, a physician-led multi-specialty group in
					Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
					surgeon to join their existing cardiovascular program. This is an
					opportunity to play a key role on a multidisciplinary team of
					cardiologists and surgeons.
				</p>
				<p className='mb-6'>
					The ideal candidate will have five or more years of experience in
					cardiac surgery. This candidate should be facile with off-pump
					revascularization, complex aortic surgery, minimally invasive valve
					and valve repair, transcatheter valve replacement, surgical atrial
					fibrillation ablation, ventricular assist device placement, and extra
					corporeal membrane oxygenation.
				</p>

				<p className='mb-6'>
					Wellstar is one of the largest integrated healthcare systems in the
					Southeast with 11 hospitals in Atlanta metro region. With two open
					heart programs at Kennestone Regional Medical Center and Atlanta
					Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac
					procedures per year. The cardiac service line is the only center in
					Georgia with the Joint Commission’s Comprehensive Cardiac Center
					certification.
				</p>
				<h3 className='text-[#3A4562] font-bold text-xl mb-6'>
					Compensation & Benefits:
				</h3>
				<p className='text-[#38415DD1] text-lg'>
					Our physicians enjoy a wide range of benefits, including:
					<ul className='list-square ml-4'>
						<li className='pl-4'>
							Very competitive compensation package with bbbbonuses{' '}
						</li>
						<li className='pl-4'>Medical, Dental, and Vision Insurance </li>
						<li className='pl-4'>Occurrence-based Malpractice Coverage</li>
						<li className='pl-4'>
							{' '}
							Short-term and Long-term Disability Insurance
						</li>
						<li className='pl-4'>Life insurance</li>
					</ul>
				</p>
			</div>

			<button className='uppercase text-white bg-[#384564] py-5 px-8 rounded-lg mx-auto block mt-6 mb-[135px]'>
				Apply now
			</button>
			<h2 className='text-[#3A4562] text-3xl pb-2 mb-4 border-b font-bold'>
				Attached images
			</h2>
			<div className='flex mb-[55px]'>
				<img className='mr-2' src={img1} alt='' />
				<img className='' src={img2} alt='' />
			</div>

			<h2 className='text-[#3A4562] text-3xl pb-2 mb-4 border-b font-bold'>
				Additional info
			</h2>
			<span className='text-[#38415DD1] text-lg mb-2 block'>
				Employment type
			</span>
			<ul className='mb-8 flex justify-between text-center text-[#55699E] font-bold '>
				<li className='bg-gray-200 py-4 px-7 rounded-md'>Full-time</li>
				<li className='bg-gray-200 py-4 px-7 rounded-md'>Part-time</li>
				<li className='bg-gray-200 py-4 px-7 rounded-md'>Temporary</li>
			</ul>
			<span className='block mb-2'>Benefits</span>
			<ul className='mb-[63px] flex text-[#988B49] font-bold gap-2'>
				<li className='py-4 bg-yellow-100 border-[#FFCF00] border rounded-lg px-2'>
					Flexible shedule
				</li>
				<li className='py-4 bg-yellow-100 border-[#FFCF00] border rounded-lg px-2'>
					Relocation assistance
				</li>
			</ul>
			<h2 className='text-[#3A4562] text-3xl pb-2 mb-4 border-b font-bold'>
				Contacts
			</h2>
			<div className='flex rounded-lg rounded-b-none py-8 px-[60px] flex-col bg-[#2A3047] text-[#E7EAF0]'>
				<span className='font-bold'>Department name.</span>
				<span className='font-bold'> University Hospital Giessen.</span>
				<span>AKH Wien, 1090 Wien, Währinger Gürtel 18-20</span>
				<span>+43 (01) 40400-12090,</span>
				<span>post_akh_diz@akhwien.at</span>
			</div>
			<div className='relative'>
				<img className='w-full rounded-b-lg' src={map} alt='' />

				<svg
					className='absolute top-[60px] left-[70px] w-[40px]'
					width='26'
					height='36'
					viewBox='0 0 26 36'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M26 11.7C26 5.23827 20.1797 0 13 0C5.8203 0 0 5.23827 0 11.7C0 15.8164 3.95671 23.3953 11.8701 34.4368L13 36L14.6756 33.6721L15.2347 32.8813C22.4116 22.6805 26 15.6201 26 11.7ZM6.5 12.5217C6.5 9.06396 9.41015 6.26087 13 6.26087C16.5899 6.26087 19.5 9.06396 19.5 12.5217C19.5 15.9795 16.5899 18.7826 13 18.7826C9.41015 18.7826 6.5 15.9795 6.5 12.5217Z'
						fill='#D8D8D8'
					/>
				</svg>
			</div>
		</section>
	)
}
export default JobDetails
