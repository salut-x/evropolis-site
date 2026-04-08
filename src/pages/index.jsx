import { About } from '@/sections/About'
import { Expertise } from '@/sections/Expertise'
import { Hero } from '@/sections/Hero'
import { Mission } from '@/sections/Mission'

export const metadata = {
	title: 'Главная',
	headerTheme: 'light'
}

export default function () {
	return (
		<>
			<Hero />
			<About />
			<Mission />
			<Expertise />
		</>
	)
}
