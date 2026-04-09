import { About } from '@/sections/About'
import { CTA } from '@/sections/CTA'
import { Expertise } from '@/sections/Expertise'
import { Features } from '@/sections/Features'
import { Hero } from '@/sections/Hero'
import { Mission } from '@/sections/Mission'
import { Projects } from '@/sections/Projects'

export const metadata = {
	title: 'Главная',
	headerTheme: 'light'
}

export default function () {
	return (
		<>
			<Hero />
			<About />
      <Projects />
			<Mission />
			<Expertise />
			<Features />
			<CTA />
		</>
	)
}
