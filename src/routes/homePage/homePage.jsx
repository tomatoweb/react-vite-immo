import Splash from '../../components/Splash';
import './homePage.scss'

export default function HomePage() {

	const text = `What a Zen place to live... Where else can you say that these days? 
Discover Budha. Here you will find the tranquility of nature and the convenience of the nearby city. 
Take the car to work, cycle to the bakery, or take public transport to the center of Brussels, 
then return to the peace and quiet of your Budha residence. 
The apartments and houses are built to last, making them a safe choice you'll never want to leave.`;

	return (
		<div className='flex flex-col justify-between h-[222vh]'>
			<Splash />
			<video
				autoPlay
				loop
				muted
				className="absolute top-0 video object-cover w-full h-full z-0"
			>
				<source src="/realestate.mp4" type="video/mp4" />
			</video>
			<div className='grid grid-cols-2 text-black'>
				<div className="flex justify-center items-center text-inherit p-8">
					<img src="./street.jpg" alt="" className='blob1' />
				</div>
				<div className="flex flex-col justify-center items-center p-8 gap-8 shadow-sm">
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>
						Find Real Estate & Get Your Dream Place
					</h1>
					<div className='text-md md:text-xl'>{text}</div>
				</div>
			</div>
		</div>
	)
}
