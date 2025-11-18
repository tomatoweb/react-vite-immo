import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Splash from "../../components/Splash";
import Footer from "../../components/Footer";

function Layout() {
	return (
		<>
			<div className="">
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

	export default Layout