import type { Metadata } from 'next'
import { Libre_Franklin } from 'next/font/google'
import '@styles/globals.css'
import { cn } from '@/lib/utils'
import Provider from '@/components/components/shared/provider'

const font = Libre_Franklin({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
	title: 'Modiff',
	description: 'Modiff social network, created by Wyns, powered by NextJs 14',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: '/logo/modiff-logo-light.svg',
				href: '/logo/modiff-logo-light.svg'
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: '/logo/modiff-logo-dark.svg',
				href: '/logo/modiff-logo-dark.svg'
			}
		]
	}
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={cn(font.className, 'antialiased')}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
