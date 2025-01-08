import { Toaster } from 'react-hot-toast'
import { useLocation, useRoutes } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import { QueryBoundaries } from './components/queryboundary/QueryBoundaries'
import { routes } from './routes'
import GlobalStyles from './styles/GlobalStyles'

function App() {
	const location = useLocation()
	const routesContent = useRoutes(routes)
	const ishomePage = !!(location.pathname === '/')
	const isDashboard =
		location.pathname.includes('dashboard')

	// console.log('USER App.tsx: ', getUser())

	return (
		<Fragment>
			<Toaster />
			<GlobalStyles
				homePage={ishomePage}
				dashboard={isDashboard}
			/>
			<QueryBoundaries>{routesContent}</QueryBoundaries>
		</Fragment>
	)
}

export default App
