import { EXPERTISE_DATA } from '@/constants/expertiseData'
import './Expertise.scss'

const Expertise = () => {
	const total = EXPERTISE_DATA.length
	const fmt = n => String(n).padStart(2, '0')

	return (
		<section
			className='expertise'
			data-js-expertise
			style={{ '--expertise-count': total }}
		>
			<div className='expertise__sticky'>
				<div className='expertise__content'>
					<header className='expertise__header'>
						<span className='section__title'>
							<span>(4)</span> Экспертиза
						</span>
						<span
							className='section__counter expertise__counter'
							data-js-expertise-counter
						>
							{fmt(1)} / {fmt(total)}
						</span>
					</header>

					<div className='expertise__items'>
						{EXPERTISE_DATA.map(card => (
							<div
								className='expertise__item'
								key={card.id}
								data-js-expertise-item
							>
								<div className='expertise__body'>
									<div className='expertise__title-wrap'>
										<h3 className='expertise__title-inner expertise__title text-xl'>
											{card.title}
										</h3>
									</div>
									<p className='expertise__subtitle text-base'>{card.subtitle}</p>
									<p className='expertise__description text-lg'>
										{card.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='expertise__media'>
					{EXPERTISE_DATA.map(card => (
						<div
							className='expertise__slide'
							key={card.id}
							data-js-expertise-slide
						>
							<img
								className='expertise__image'
								src={card.image}
								alt={card.imageAlt}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Expertise
