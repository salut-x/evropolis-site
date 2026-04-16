import { AboutCompany } from '@/sections/AboutCompany'
import { History } from '@/sections/History'

export const metadata = {
	title: 'О нас',
	headerTheme: 'light'
}

export default function () {
	return (
		<>
			<AboutCompany />
			<History />
		</>
	)
}
