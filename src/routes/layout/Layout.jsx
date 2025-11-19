import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

function Layout() {
	return (
		<>
			<div>
				{/* for the footer */}
				<div className="min-h-[72.4vh]">
					<Navbar />
					<Outlet />
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Layout