import Footer from "../components/Footer";
import Header from "../components/Header";

export default function UserLayout({ children }) {
	return (
		<div className="flex flex-col select-none min-h-screen">

			<div><Header /></div>
			<div className="flex-grow pn:max-sm:min-h-[800px] sm:min-h-[600px]">
				{children}
			</div>
			<div><Footer /></div>
		</div>

	)
}
