import { About } from '@/sections/About'
import { Hero } from '@/sections/Hero'

export const metadata = {
	title: 'Главная',
	headerTheme: 'light'
}

export default function () {
	return (
		<>
			<Hero />
			<About />
		</>
	)
}
