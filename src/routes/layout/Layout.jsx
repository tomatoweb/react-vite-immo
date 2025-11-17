import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Splash from "../../components/Splash";
import Footer from "../../components/Footer";

function Layout() {
	return (
		<>
			<div className="flex flex-col text-[#ede6f7] h-screen">
				<Navbar />				
			</div>
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout