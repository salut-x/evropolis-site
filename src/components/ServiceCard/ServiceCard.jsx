import classNames from 'classnames'
import './ServiceCard.scss'

const ServiceCard = props => {
	const {
		index = 1,
		total = 5,
		title,
		subtitle,
		description,
		image,
		imageAlt = ''
	} = props

	const formatIndex = n => String(n).padStart(2, '0')

	return (
		<article
			className={classNames('service-card')}
			data-js-service-card
		>
			<div className='service-card__inner'>
				<div className='service-card__content'>
					<header className='service-card__header'>
						<h2 className='section__title'>
							<span>(4)</span> Экспертиза
						</h2>
						<span className='section__counter'>
							{formatIndex(index)} / {formatIndex(total)}
						</span>
					</header>

					<div className='service-card__body'>
						<h3 className='service-card__title text-xl'>{title}</h3>
						{subtitle && (
							<p className='service-card__subtitle text-lg'>{subtitle}</p>
						)}
						{description && (
							<p className='service-card__description text-lg'>{description}</p>
						)}
					</div>
				</div>

				<div className='service-card__media'>
					<img
						className='service-card__image'
						src={image}
						alt={imageAlt}
						loading='lazy'
					/>
				</div>
			</div>
		</article>
	)
}

export default ServiceCard
