import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Splash from "../../components/Splash";
import Footer from "../../components/Footer";

function Layout() {
	return (
		<>
			<div className="flex flex-col text-[#ede6f7] bg-gray-800 h-screen">
				<Navbar />
				<Splash />				
				<video
					autoPlay
					loop
					muted
					className="absolute top-0 video object-cover w-full h-[100vh] z-0"
				>
					<source src="/realestate.mp4" type="video/mp4" />
				</video>
			</div>
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout