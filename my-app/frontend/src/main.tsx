import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
	type QueryFunctionContext
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import toast from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import config from './data/config.ts'
import { apiClient } from './services/http-common.ts'

const defaultQueryFn = async ({
	queryKey
}: QueryFunctionContext) => {
	const { data } = await apiClient.get(
		`${config.API_URL}${queryKey[0]}`
	)
	return data
}

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error, query) => {
			if (query.state.data !== undefined) {
				toast.error(
					`Something went wrong: ${error.message}`
				)
			}
		}
	}),
	defaultOptions: {
		queries: {
			staleTime: 1000 * 20,
			queryFn: defaultQueryFn,
			// suspense: true,
			// refetchOnWindowFocus: false,
			retry: 2
		}
	}
})

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</BrowserRouter>
	</StrictMode>
)
