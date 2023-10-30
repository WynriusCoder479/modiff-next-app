import { Metadata } from 'next'
import { ReactNode } from 'react'

interface LandingLayoutProps {
	children: ReactNode
}

export const metadata = {
	title: 'Modiff | Landing Page'
} satisfies Metadata

const LandingLayout = ({ children }: LandingLayoutProps) => {
	return <div>{children}</div>
}

export default LandingLayout
