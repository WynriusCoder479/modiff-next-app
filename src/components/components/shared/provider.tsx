'use client'

import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ClerkProvider } from '@clerk/nextjs'
import { FC, PropsWithChildren, useState } from 'react'
import { EdgeStoreProvider } from '@/lib/edgestore'

const Provider: FC<PropsWithChildren> = ({ children }) => {
	const [queryClient] = useState<QueryClient>(() => new QueryClient())

	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			enableSystem
			disableTransitionOnChange
		>
			<ClerkProvider>
				<QueryClientProvider client={queryClient}>
					<EdgeStoreProvider>{children}</EdgeStoreProvider>
					{process.env.NODE_ENV === 'development' && (
						<ReactQueryDevtools initialIsOpen={false} />
					)}
				</QueryClientProvider>
			</ClerkProvider>
		</ThemeProvider>
	)
}

export default Provider
