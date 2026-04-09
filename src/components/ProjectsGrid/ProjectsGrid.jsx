import { ProjectCard } from '@/components/ProjectCard'
import { PROJECTS } from '@/constants/projectsData'
import './ProjectsGrid.scss'

const ProjectsGrid = props => {
	const { limit } = props

	const visibleProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS

	return (
		<div className='projects__grid'>
			{visibleProjects.map(item => (
				<ProjectCard
					key={item.id}
					href={item.href}
					srcImg={item.srcImg}
					title={item.title}
					category={item.category}
					categoryKey={item.categoryKey}
					square={item.square}
				/>
			))}
		</div>
	)
}

export default ProjectsGrid
