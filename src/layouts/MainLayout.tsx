import {FC} from "react";
import {Outlet} from "react-router-dom";

export const MainLayout: FC = () => {
	return (
		<div>
			<header>
				<h1>Main Layout</h1>
			</header>
			<main>
				<Outlet/>
			</main>
			<footer>
				<p>Footer</p>
			</footer>
		</div>
	);
}