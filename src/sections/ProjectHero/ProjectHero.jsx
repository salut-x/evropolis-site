import './ProjectHero.scss'

const ProjectHero = ({ title, srcImg }) => {
	return (
		<section className='project-hero'>
			<div className='project-hero__bg' style={{ backgroundImage: `url(${srcImg})` }} />
			<div className='project-hero__inner container'>
				<div className='project-hero__content'>
					<h1 className='project-hero__title text-2xl'>
						<span className='reveal'>
							<span className='reveal__inner'>{title}</span>
						</span>
					</h1>
				</div>
			</div>
		</section>
	)
}

export default ProjectHero
