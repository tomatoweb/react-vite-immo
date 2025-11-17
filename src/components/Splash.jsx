
import SearchBar from "./SearchBar";

const Splash = () => {
	return (
		<div className='z-1 flex flex-col space-y-20 justify-center items-center h-screen'>
			<div className='text-center text-9xl font-semibold tracking-wider font-davinci'>
			What a Zen life here.
			</div>
			<SearchBar />
		</div>
	)
}

export default Splash