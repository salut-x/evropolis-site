import './ProjectCard.scss'

const ProjectCard = props => {
	const {
		index,
		srcImg = '/src/assets/images/about/1.jpg',
		href = '',
		title = '',
		category = '',
		categoryKey,
		square = 12
	} = props

	return (
		<a
			href={href}
			className='project-card'
			data-js-filter-item
			data-category={categoryKey}
		>
			<div className='project-card__image-wrap'>
				<img
					src={srcImg}
					alt=''
					className='project-card__image'
				/>
			</div>
			<div className='project-card__info'>
				<span className='project-card__category'>{category}</span>
				<span className='project-card__square'>
					{square}м<sup>2</sup>
				</span>
			</div>
			<h3 className='project-card__title'>{title}</h3>
		</a>
	)
}

export default ProjectCard
