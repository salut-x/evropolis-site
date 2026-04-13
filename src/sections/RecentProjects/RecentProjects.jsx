import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { PROJECTS } from '@/constants/projectsData'
import './RecentProjects.scss'

const RecentProjects = props => {
	const { slug } = props

	const currentIndex = PROJECTS.findIndex(p => p.slug === slug)
	const total = PROJECTS.length

	let items = []

	if (currentIndex === 0) {
		items = [PROJECTS[1], PROJECTS[2]]
	} else if (currentIndex === total - 1) {
		items = [PROJECTS[total - 3], PROJECTS[total - 2]]
	} else {
		items = [PROJECTS[currentIndex - 1], PROJECTS[currentIndex + 1]]
	}

	items = items.filter(Boolean)

	if (!items.length) return null

	return (
		<section className='recent-projects'>
			<div className='recent-projects__inner container'>
				<h2 className='recent-projects__title'>Другие проекты</h2>

				<div className='recent-projects__grid'>
					{items.map((project, i) => (
						<ProjectCard
							key={project.id}
							index={i}
							srcImg={project.srcImg}
							href={project.href}
							title={project.title}
							category={project.category}
							categoryKey={project.categoryKey}
							square={project.square}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default RecentProjects 
