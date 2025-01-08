import type { RouteObject } from 'react-router-dom'
import { QueryBoundaries } from '../components/queryboundary/QueryBoundaries'
import Album from '../features/album/components/Album'
import { Login } from '../features/login/components/Login'
import GalleriaPage from '../pages/GalleriaPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import { getDashBoardRoutes } from './GetDashBoardRoutes'
import MainLayout from './MainLayout'

const routes: RouteObject[] = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: 'login',
				element: (
					<QueryBoundaries>
						<Login />
					</QueryBoundaries>
				)
			},
			{
				path: 'galleria',
				children: [
					{
						index: true,
						element: (
							<QueryBoundaries>
								<GalleriaPage />
							</QueryBoundaries>
						)
					},
					{
						path: ':slug',
						element: (
							<QueryBoundaries>
								<Album />
							</QueryBoundaries>
						)
					}
				]
			},
			{
				path: '*',
				element: <NotFoundPage />
			}
		]
	},
	getDashBoardRoutes()
]

export default routes
