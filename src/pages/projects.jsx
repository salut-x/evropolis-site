import { Portfolio } from '@/sections/Portfolio'
import { ProjectsHero } from '@/sections/ProjectsHero'

export const metadata = {
	title: 'Проекты'
}

export default function () {
	return (
		<>
			<ProjectsHero />
			<Portfolio />
		</>
	)
}
