import { ProjectsGrid } from '@/components/ProjectsGrid'
import './Portfolio.scss'

const Portfolio = () => {
	return (
		<section className='portfolio__section'>
			<div className='portfolio__inner container'>
				<ProjectsGrid />
			</div>
		</section>
	)
}

export default Portfolio
