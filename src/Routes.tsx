import {AboutPage, HomePage} from "./pages";
import {AppLayout, AuthLayout, MainLayout} from "./layouts";
import {useRoutes} from "react-router-dom";
import {PageNotFound} from "./pages/errors";

export const AppRouter = () => {
	// return (
	// 	<BrowserRouter>
	// 		<Routes>
	// 		<Route path="/" element={<AppLayout/>}>
	// 			<Route path="/" element={<MainLayout/>}>
	// 				<Route index element={<HomePage/>}/>
	// 				<Route path="about" element={<AboutPage/>}/>
	// 			</Route>
	//
	// 			<Route path="/auth" element={<AuthLayout/>}>
	// 				<Route path="login" element={<div>Login</div>}/>
	// 				<Route path="register" element={<div>Register</div>}/>
	// 			</Route>
	// 		</Route>
	// 	</Routes>
	// 	</BrowserRouter>
	// )

	return useRoutes([
		{
			path: '/',
			element: <AppLayout/>,
			children: [
				{
					path: '/',
					element: <MainLayout/>,
					children: [
						{path: '/', element: <HomePage/>, index: true},
						{path: 'about', element: <AboutPage/>},
						{path: '*', element: <PageNotFound/>}
					]
				},
				{
					path: '/auth',
					element: <AuthLayout/>,
					children: [
						{path: 'login', element: <div>Login</div>},
						{path: 'register', element: <div>Register</div>}
					]
				}
			]
		}
	])

}