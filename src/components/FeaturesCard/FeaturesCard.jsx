import Icon from '@/components/Icon/Icon'
import './FeaturesCard.scss'

const FeaturesCard = props => {
	const { title, description, index, icon } = props

	return (
		<div className='features__card' data-js-features-card>
			<div className='features__card-top'>
				<Icon
					className='features__card-icon'
					name={icon}
				/>
			</div>
			<div className='features__card-body'>
				<h3 className='features__card-title'>{title}</h3>
				<p className='features__card-description'>{description}</p>
			</div>
			<div className='features__card-bottom'>
				<span className='features__card-index'>
					{String(index).padStart(2, '0')}
				</span>
			</div>
		</div>
	)
}
export default FeaturesCard
