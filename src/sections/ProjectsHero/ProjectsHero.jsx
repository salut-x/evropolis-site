import { ProjectFilter } from '@/components/ProjectFilter'
import './ProjectsHero.scss'

const ProjectsHero = () => {
	return (
		<section className='projects-hero'>
			<div className='projects-hero__inner container'>
				<h1 className='projects-hero__title text-2xl'>
					<span className='reveal-onload'>
						<span className='reveal-onload__inner'>Избранные проекты</span>
					</span>
				</h1>
				<ProjectFilter className='text-base' />
			</div>
		</section>
	)
}

export default ProjectsHero
