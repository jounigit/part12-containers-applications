import { QueryErrorResetBoundary } from '@tanstack/react-query'
import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorHandler, LoadingHandler } from '../handlers'

//
export const QueryBoundaries = ({
	children
}: { children: React.ReactNode }) => (
	<QueryErrorResetBoundary>
		{({ reset }) => (
			<ErrorBoundary
				onReset={reset}
				FallbackComponent={ErrorHandler}
			>
				<React.Suspense fallback={<LoadingHandler />}>
					{children}
				</React.Suspense>
			</ErrorBoundary>
		)}
	</QueryErrorResetBoundary>
)
