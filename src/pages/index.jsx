import { About } from '@/sections/About'
import { CTA } from '@/sections/CTA'
import { Expertise } from '@/sections/Expertise'
import { Features } from '@/sections/Features'
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
			<Features />
			<CTA />
		</>
	)
}
