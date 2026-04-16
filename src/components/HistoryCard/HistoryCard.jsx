import './HistoryCard.scss'

const HistoryCard = props => {
	const { title, description, years } = props

	return (
		<div className='history-card'>
			<div className='history-card__body'>
				<h3 className='history-card__body text-lg'>{title}</h3>
				<p className='history-card__description'>{description}</p>
			</div>
			<span className='history-card__years text-xl'>{years}</span>
		</div>
	)
}

export default HistoryCard
