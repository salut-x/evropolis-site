import { Button } from '@/components/Button'
import './Projects.scss'
import { ProjectsGrid } from '@/components/ProjectsGrid'

const Projects = () => {
	return (
		<section className='projects__section section'>
			<div className='projects__inner container'>
				<header className='section__header'>
					<h2 className='section__title'>
						<span>(1)</span> Проекты
					</h2>
					<p className='section__subtitle'>
						<span className='reveal'>
							<span className='reveal__inner'>Избранные проекты</span>
						</span>
					</p>
				</header>
				<div className='section__body projects__content'>
					<ProjectsGrid limit={6}  />
				</div>
				<div className='projects__footer'>
					<p className='projects__teaser text-lg'>
						Строим дома, которые служат десятилетиями — потому что знаем,
						как правильно это делать
					</p>
					<Button
						href='/projects'
						iconName='x-icon'
						label='Все проекты'
					/>
				</div>
			</div>
		</section>
	)
}

export default Projects
