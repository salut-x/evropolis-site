import './PrincipleCard.scss'

const PrincipleCard = props => {
	const { number, title, description } = props

	return (
		<div className='principle-card'>
			<header className='principle-card__header'>
				<h3 className='principle-card__title'>{title}</h3>
				<span className='principle-card__number text-sm'>{number}</span>
			</header>
			<p className='principle-card__description'>{description}</p>
		</div>
	)
}

export default PrincipleCard
