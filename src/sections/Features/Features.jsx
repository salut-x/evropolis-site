import { FeaturesCard } from '@/components/FeaturesCard'
import { FEATURES } from '@/constants/features'
import './Features.scss'

const Features = () => {
	return (
		<section className='features__section section'>
			<div className='features__inner container'>
				<header className='section__header'>
					<h2 className='section__title'>
						<span>(5)</span>Преимущества
					</h2>
					<p className='section__subtitle'>
						<span className='reveal'>
							<span className='reveal__inner'>Почему нам</span>
						</span>
						<span className='reveal'>
							<span className='reveal__inner'>доверяют</span>
						</span>
					</p>
				</header>
				<div className='section__body'>
					<div
						className='features__slider swiper'
						data-js-features
					>
						<div className='features__list swiper-wrapper'>
							{FEATURES.map((item, i) => (
								<div
									key={item.id}
									className='features__item swiper-slide'
								>
									<FeaturesCard
										title={item.title}
										description={item.description}
										icon={item.icon}
										index={i + 1}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
